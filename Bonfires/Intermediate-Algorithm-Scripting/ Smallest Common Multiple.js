/*
Bonfire: Smallest Common Multiple
Concept:Extend the concept of LCM of two numbers
*/
function smallestCommons(arr) {
 if(arr[0]>arr[1]){
   temp = arr[0];
   arr[0] = arr[1];
   arr[1] = temp;
 }
  newArr = Array();
  min = arr[0];max = arr[1];
  for(i=min;i<=max;i++){
   newArr.push(i); 
  }
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }
  mult = min;
  for(i=0;i<newArr.length;i++){
    mult = lcm(mult,newArr[i]);
  }
  return mult;
}


smallestCommons([5,1]);
