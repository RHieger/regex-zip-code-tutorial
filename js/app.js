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
const resetButton = document.getElementById('reset');
const resultBox = document.getElementById('results');
const placeHolder = document.getElementById('message');

// Test String to be passed to regular expression:

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
08375
KbdsD$%^&*
sSd070031jkl;m
70122
\sKu2034
93108
75381
asdfjkl;
60661
!9004!@#$5^&*
97218
#,.$$&&@
10022-3337
eNuhfF!.`;

// Regular Expression to which testString will be passed:

const regex = /^[0-9]{5}(-[0-9]{4})?$/gm;

// Perform pattern matches and store results
// in matches array:

const matches = testString.match(regex);

/* HELPER FUNCTIONS */

/** The algorithm below is adapted freely from a YouTube
 *  tutorial at this URL:
 *  https://www.youtube.com/watch?v=1s4s_lU83pM
 * 
*/

// Array that will contain array of textContent:

const paragraphText = [];

// Create text content for paragraphs containing matches.

const createParagraphText = () => {
  matches.forEach( match => {
    let matchNumber = matches.indexOf(match) +1;
    paragraphText.push(
      `Match #${matchNumber}: ${match}`
    );
  });
};

// Array to contain completed paragraph nodes:

const paragraphs = [];

// Append text nodes to paragraph nodes.

const createParagraphs = () => {
  paragraphText.forEach( text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraphs.push(paragraph);
  });
};

// Append completed paragraphs to ResultBox.

const appendParagraphs = (parent, children) => {
  children.forEach( child => {
    parent.appendChild(child);
  });
};


/* CALLBACK FUNCTIONS */

// Inject paragraph content with matches into the result box.

const populateResultBox = () => {

  resultBox.classList.remove('default-result');
  resultBox.removeChild(placeHolder);
  resultBox.classList.add('custom-scrollbar');

  createParagraphText();

  // Create paragraphs and set textContent only
  // if not already created. Prevents doubling
  // of result data if old paragraphs have not
  // yet beeen garbage collected.

  if (paragraphs.length === 0) {
    createParagraphs();
  }

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
};

/* EVENT LISTENERS */

// Validation Button event listener

resultButton.addEventListener('click', populateResultBox);

// Reset Button event listener

resetButton.addEventListener('click', depopulateResultBox);
