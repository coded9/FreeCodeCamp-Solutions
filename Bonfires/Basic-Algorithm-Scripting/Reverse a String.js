/* Bonfire: Reverse a String
  Code by Ashok
  http://www.freecodecamp.com/coded9
*/



function reverseString(str) {
  array = str.split("");
  
  
  array = array.reverse();
 str = array.join("");
  return str;
}

reverseString("hello");
