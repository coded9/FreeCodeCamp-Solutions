/*
Bonfire: Diff Two Arrays
Author:Ashok
*/
function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for(i=0;i<arr1.length;i++){
    if(arr2.indexOf(arr1[i]) === -1){
       newArr.push(arr1[i]);
      }
  }
   for(i=0;i<arr2.length;i++){
    if(arr1.indexOf(arr2[i]) === -1){
        newArr.push(arr2[i]);
      }
  }
  return newArr;
}
//diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

function diff(arr1,arr2){
  var newArr = [];
  newArr = arr1.filter(function(i){
    return arr2.indexOf(i) === -1;
  }).concat(arr2.filter(function(i){
    return arr1.indexOf(i) === -1;
  }));
  return newArr;
}
