/**
 * 
 * Regex Zip Code Tutorial--Mini Web Application
 * 
 * Validates and dynamically updates display to show
 * matches of valid zip codes from test string.
 */

const testString = `10003 asdf10003 10003asdf jkl;10003^$@% 10003-8924 one zero zero zero three.
9101-94015 94015-9101 20012 08735 KbdsD$%^&* sSd070031jKl;m 70122 \sKu2034.
98108 75381 asdfjkl;9 60661 !90004!@#$5^&* 97218 #,.$$&&%@ 10022-3337 eNuhfF!.`;

const regex = /^[0-9]{5}(-[0-9]{4})?/;

// CAPTURE DOM NODES

const testData = document.getElementById('dataSet');