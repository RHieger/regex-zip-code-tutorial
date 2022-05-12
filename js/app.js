/**
 * 
 * Regex Zip Code Tutorial--Mini Web Application
 * 
 * Robert Hieger
 * 
 * Validates and dynamically updates display to show
 * matches of valid zip codes from test string.
 * 
 * The software contained in this tutorial is licensed
 * under the GNU GENERAL PUBLIC LICENSE version 3,
 * June 29, 2007 included in this repository.
 * 
 */

// Capture necessary DOM nodes.

const resultButton = document.getElementById('validate');
const resetButton = document.getElementById('reset')
const resultBox = document.getElementById('results');
const placeHolder = document.getElementById('message');

const testString =
`10003
asdf10003
10003asdf
jklm10003^$@%
10003-8924
one zero zero zero three
9101-94015
94015-9101
20012
08735
KbdsD$%^&*
sSd070031jKl;m
70122
\sKu2034
98108
75381
asdfjkl;
60661
!9004!@#$5^&*
97218
#,.$$&&%@
10022-3337
eNuhfF!.`; 

const regex = /^[0-9]{5}(-[0-9]{4})?$/gm;

const matches = testString.match(regex);


/** The algorithm below is adapted freely from a YouTube
 *  tutorial at this URL:
 *  https://www.youtube.com/watch?v=1s4s_lU83pM
 * 
*/

const createParagraph = (text) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
};

const paragraphText = [
  createParagraph(` Match #1: ${matches[0]}`),
  createParagraph(` Match #2: ${matches[1]}`),
  createParagraph(` Match #3: ${matches[2]}`),
  createParagraph(` Match #4: ${matches[3]}`),
  createParagraph(` Match #5: ${matches[4]}`),
  createParagraph(` Match #6: ${matches[5]}`),
  createParagraph(` Match #7: ${matches[6]}`),
  createParagraph(` Match #8: ${matches[7]}`),
  createParagraph(` Match #9: ${matches[8]}`),
  createParagraph(`Match #10: ${matches[9]}`),
  createParagraph(`Match #11: ${matches[10]}`)
];

const appendParagraphs = (parent, children) => {
  children.forEach( (child) => {
    parent.appendChild(child);
  }
)};

const populateResultBox = () => {
  
  results.classList.remove('default-result');
  results.removeChild(placeHolder);
  results.classList.add('custom-scrollbar');
  
  // Append all result paragraphs to resultBox.
  appendParagraphs(resultBox, paragraphText);

};

const depopulateResultBox = () => {
  while (resultBox.firstChild) {
    resultBox.removeChild(resultBox.firstChild);
  }
  results.classList.remove('custom-scrollbar');
  results.classList.add('default-result');
  results.appendChild(placeHolder);
}

// Validation Button event listener
resultButton.addEventListener('click', populateResultBox);

// Reset Button event listener
resetButton.addEventListener('click', depopulateResultBox);
