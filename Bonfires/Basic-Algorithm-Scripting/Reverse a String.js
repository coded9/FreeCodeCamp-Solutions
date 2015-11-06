function reverseString(str) {
  array = str.split("");
  
  
  array = array.reverse();
 str = array.join("");
  return str;
}

reverseString("hello");
