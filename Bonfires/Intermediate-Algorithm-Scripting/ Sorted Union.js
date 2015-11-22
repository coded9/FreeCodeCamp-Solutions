/*
Bonfire: Sorted Union
Author:Ashok
*/
function unite(arr1, arr2, arr3) {
 var newArr;
  var args = Array.prototype.slice.call(arguments);
  newArr = args.reduce(function(arrA,arrB){
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });
 
   return newArr;                    
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
