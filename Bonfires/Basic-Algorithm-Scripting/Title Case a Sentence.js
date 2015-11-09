/* Bonfire: Title Case a Sentence
  Code by Ashok
  http://www.freecodecamp.com/coded9
*/

function titleCase(str) {
  arr =  str.split(" ");
  for(i=0;i<arr.length;i++){
    arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase();
    
  }
  return arr.join(" ");
}

titleCase("I'm a little tea pot");
