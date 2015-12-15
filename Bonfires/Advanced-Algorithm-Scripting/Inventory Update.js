/*
Bonfire: Inventory Update
Ref: http://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value
     http://stackoverflow.com/questions/13769865/create-array-where-keys-match
*/
function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
   var newArr = [];
  for(var key1 in arr1){
    newArr.push(arr1[key1]);
  for(var key2 in arr2){
  
    if(arr1[key1][1] === arr2[key2][1]){
      arr1[key1][0] += arr2[key2][0];
     delete arr2[key2];
    }
  }
    }
  //console.log(arr1);
  
  for(var key in arr2){
    if(arr2[key]){
      newArr.push(arr2[key]);
    }
  }
  
function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
 

return newArr.sort(compareSecondColumn);

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

inventory(curInv, newInv);
