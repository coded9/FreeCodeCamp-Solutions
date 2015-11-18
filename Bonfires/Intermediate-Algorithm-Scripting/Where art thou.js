/*
Bonfire: Where art thou

*/
function where(collection, source) {
  var arr = [];
  var count ;
  collection.forEach(function(collObj) { 
     count = 0 ; 
     for(var prop in source){
        if( collObj.hasOwnProperty(prop) && collObj[prop] === source[prop])
        count++; 
       }
     if(count>=Object.keys(source).length){ 
        arr.push(collObj);
      }
    
    });
    return arr;
}

//where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
