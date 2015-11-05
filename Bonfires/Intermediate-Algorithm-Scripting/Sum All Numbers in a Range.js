function sumAll(arr) {
  sum = 0;
  arr = arr.sort(function(a,b){
    return a-b;
  });
  for(i=arr[0];i<=arr[1];i++){
    sum = sum + i;
  }
  return sum;
}

sumAll([1, 4]);
