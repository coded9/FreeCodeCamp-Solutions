/*
Bonfire: Pairwise
*/

function pairwise(arr, arg) {
 var sum = 0;
  var match =0;
  for(i=0;i<arr.length;i++){
 for(j=i+1;j<arr.length;j++){
   if(arr[i]+arr[j] ==arg){
     if(match ==j){
       continue;
     }
     sum += i+j;
     console.log(i);
     console.log(j);
     match = j;
     console.log(sum);
   }
   
 } 
}
  return sum;
}
pairwise([0, 0, 0, 0, 1, 1], 1);
