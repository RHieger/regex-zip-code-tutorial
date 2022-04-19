/**
 * 
 * Regex Zip Code Tutorial--Mini Web Application
 * 
 * Validates and dynamically updates display to show
 * matches of valid zip codes from test string.
 */

// Capture necessary DOM nodes.
 const resultButton = document.getElementById("validateZip");
 const resultBox = document.getElementById('results');

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
 \sKu2034.
 98108
 75381
 asdfjkl;
 60661
 !90004!@#$5^&*
 97218
 #,.$$&&%@
 10022-3337
 eNuhfF!.`;

 const regex = /^[^A-Za-z][0-9]{5}(-[0-9]{4})?/gm;

const matches = testString.match(regex);

console.log(matches);

let count = 0;

matches.forEach((match, count) => {
  if (count + 1 < 10) {
    console.log(` Match #${count + 1}: ${match}`);
    count++;
  } else {
    console.log(`Match #${count + 1}: ${match}`);
    count++;
  }
});

/* END DEBUGGING CODE */

const paraCount = matches.length; // Number of paragraphs needed for matches

console.log(`Number of Match paragraphs: ${paraCount}`);  // DEBUG PURPOSES ONLY

// const addParagraphs = () => {
//   resultBox.appendChild(domNode1);
//   resultBox.appendChild(domNode2);
//   resultBox.appendChild(domNode3);
//   resultBox.appendChild(domNode4);
//   resultBox.appendChild(domNode5);
//   resultBox.appendChild(domNode6);
//   resultBox.appendChild(domNode7);
//   resultBox.appendChild(domNode8);
//   resultBox.appendChild(domNode9);
//   resultBox.appendChild(domNode10);
//   resultBox.appendChild(domNode11);
// };

const populateResultBox = () => {
  
  // Append domNodes to resultBox.

  const domNode1 = document.createElement('p');
  const domNode2 = document.createElement('p');
  const domNode3 = document.createElement('p');
  const domNode4 = document.createElement('p');
  const domNode5 = document.createElement('p');
  const domNode6 = document.createElement('p');
  const domNode7 = document.createElement('p');
  const domNode8 = document.createElement('p');
  const domNode9 = document.createElement('p');
  const domNode10 = document.createElement('p');
  const domNode11 = document.createElement('p');

  // Add paragraphs to #results.
  resultBox.appendChild(domNode1);
  resultBox.appendChild(domNode2);
  resultBox.appendChild(domNode3);
  resultBox.appendChild(domNode4);
  resultBox.appendChild(domNode5);
  resultBox.appendChild(domNode6);
  resultBox.appendChild(domNode7);
  resultBox.appendChild(domNode8);
  resultBox.appendChild(domNode9);
  resultBox.appendChild(domNode10);
  resultBox.appendChild(domNode11);

  domNode1.textContent = ' Match #1: ' + matches[0];
  domNode2.textContent = ' Match #2: ' + matches[1];
  domNode3.textContent = ' Match #3: ' + matches[2];
  domNode4.textContent = ' Match #4: ' + matches[3];
  domNode5.textContent = ' Match #5: ' + matches[4];
  domNode6.textContent = ' Match #6: ' + matches[5];
  domNode7.textContent = ' Match #7: ' + matches[6];
  domNode8.textContent = ' Match #8: ' + matches[7];
  domNode9.textContent = ' Match #9: ' + matches[8];
  domNode10.textContent = 'Match #10: ' + matches[9];
  domNode11.textContent = 'Match #11: ' + matches[10];

};

// addParagraphs();

// populateResultBox();

console.log(resultBox); // DEBUG ONLY

resultButton.addEventListener('click', populateResultBox);
