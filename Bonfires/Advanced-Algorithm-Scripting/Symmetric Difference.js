/*
Bonfire: Symmetric Difference
*/
function sym(args) {
  var newArr = [];
  var argss = Array.prototype.slice.call(arguments);
   
  newArr = args.reduce(function(arr1,arr2){
    for(i=0;i<arr1.length;i++){
    if(arr2.indexOf(arr1[i]) <0){
  
        newArr.push(arr1[i]);
      }

  }
   for(i=0;i<arr2.length;i++){
    if(arr1.indexOf(arr2[i])<0){
console.log(arr2[i]);
        newArr.push(arr2[i]);
      }
  }
  return newArr;
  });
 
   return newArr;    
}

sym([1, 2, 3], [5, 2, 1, 4]);
