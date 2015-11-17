/*
Bonfire: Everything Be True
*/
function every(collection, pre) {
  // Is everyone being true?
  var count = 0;
  for(a in collection){
    if(a.pre){
      count++;
    }
  }
  if(count === collection.length)
  return true;
  else
    return false;
  
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
