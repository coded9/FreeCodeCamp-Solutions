/* Bonfire: Check for Palindromes
  Code by Ashok
  http://www.freecodecamp.com/coded9
*/


function palindrome(str) {
  // Good luck!

  if(str.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split("").reverse().join("")==str.replace(/[^A-Za-z0-9]/g,"").toLowerCase())
  return true;
  else
    return false;
}



palindrome("never odd or even");



function palindrome(str) {
  // Good luck!
var strStrip = str.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
  if(strStrip.split("").reverse().join("")==strStrip)
  return true;
  else
    return false;
}



palindrome("never odd or even");
