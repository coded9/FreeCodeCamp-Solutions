/* Bonfire: Where do I belong
  Code by Ashok
  http://www.freecodecamp.com/coded9
*/



function where(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort();
  for(i=0;i<arr.length;i++){
    if(num <= arr[i]){
      return i;
    }
    
  }
    return arr.length;
 
  
}

where([40, 60], 50);
