function repeat(str, num) {
  // repeat after me
  if(num-1>0){
    x = "";
    for(i=0;i<num-1;i++){
      x = x + str;
    }
    
    return str+x;
  }
  else
  return "";
}

repeat("abc", 5);
