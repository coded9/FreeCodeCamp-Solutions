function sumFibs(num) {
  var a= 0; b=1;
  var c;
  var sum = 0;
  while(b <=num){
    
    if(b%2!==0){
      sum +=b;
    }
    c = a+b;
    a = b;
    b = c;
  }
  return sum;
}

sumFibs(75024);
