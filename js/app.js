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

const paragraphText = []; // will contain array of textContent

// Create text content for paragraphs containing matches.
const createParagraphText = () => {
  for (match in matches) {
    let matchNumber = parseInt(match) + 1;
    paragraphText.push(
      `Match #${matchNumber}: ${matches[match]}`
    );
  }
};

const paragraphs = [];  // will contain array of complete paragraphs

// Assemble all result paragraphs.
const createParagraphs = () => {
  for (text in paragraphText) {
    const paragraph = document.createElement('p');
    paragraph.textContent = paragraphText[text];
    paragraphs.push(paragraph);
  }
};

// Append all paragraphs as children of the result box.
const appendParagraphs = (parent, children) => {
  children.forEach( (child) => {
    parent.appendChild(child);
  }
)};

// Inject paragraph content with matches into the result box.
const populateResultBox = () => {
  
  resultBox.classList.remove('default-result');
  resultBox.removeChild(placeHolder);
  resultBox.classList.add('custom-scrollbar');

  // Create paragraph textContent.
  createParagraphText();

  // Create paragraphs and set textContent.
  createParagraphs();
  
  // Append all result paragraphs to resultBox.
  appendParagraphs(resultBox, paragraphs);

};

// Remove all paragraphs from result box restoring default screen.
const depopulateResultBox = () => {
  while (resultBox.firstChild) {
    resultBox.removeChild(resultBox.firstChild);
  }
  resultBox.classList.remove('custom-scrollbar');
  resultBox.classList.add('default-result');
  resultBox.appendChild(placeHolder);
}

// Validation Button event listener
resultButton.addEventListener('click', populateResultBox);

// Reset Button event listener
resetButton.addEventListener('click', depopulateResultBox);
