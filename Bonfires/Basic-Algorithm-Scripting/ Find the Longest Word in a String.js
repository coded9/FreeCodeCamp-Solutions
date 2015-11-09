/* Bonfire:  Find the Longest Word in a String
  Code by Ashok
  http://www.freecodecamp.com/coded9
*/


function findLongestWord(str) {
  arr = str.split(" ");
  min =0;
  for(i=0;i<arr.length;i++){
    if(min<arr[i].length){
      min = arr[i].length;
    }
  }
  return min;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
