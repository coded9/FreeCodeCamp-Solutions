function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
     if(target == str.substr(-(target.length),target.length))
       return true;
    else
      return false;
  
  
}

end("Bastian", "n");
