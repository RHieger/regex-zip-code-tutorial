/**
 * 
 * Regex Zip Code Tutorial--Mini Web Application
 * 
 * Validates and dynamically updates display to show
 * matches of valid zip codes from test string.
 */

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

 /* FOR DEBUGGING PURPOSES ONLY */

//const testString = '10003 asdf10003 10003-8924 10003asdf 20012 60661 94015-9109 94015-9109asdf';

const regex = /^[^A-Za-z][0-9]{5}(-[0-9]{4})?/gm;

const matches = testString.match(regex);

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

/* CAPTURE REQUIRED DOM NODES */
