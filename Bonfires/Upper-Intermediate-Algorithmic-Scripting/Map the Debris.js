/*
Bonfire:Map the Debris
*/
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  console.log(arr);
  for(i=0;i<arr.length;i++){
  var orbitalPer = Math.round(2*Math.PI*Math.sqrt(Math.pow(arr[i].avgAlt+earthRadius,3)/GM));
  delete arr[i].avgAlt;
  arr[i].orbitalPeriod = orbitalPer;
  console.log(arr);
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  console.log(arr);
  for(var prop in arr){
  var orbitalPer = Math.round(2*Math.PI*Math.sqrt(Math.pow(arr[prop].avgAlt+earthRadius,3)/GM));
  delete arr[prop].avgAlt;
  arr[prop].orbitalPeriod = orbitalPer;
  console.log(arr);
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
