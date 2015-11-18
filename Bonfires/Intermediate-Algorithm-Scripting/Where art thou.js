/*
Bonfire: Where art thou

*/
function where(collection, source) {
  var arr = [];
  // What's in a name?
  for(a in collection){
    if(collection[a].hasOwnProperty(source) && collection[a][source] = source ){
      arr.push(a);
    }
  }
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
