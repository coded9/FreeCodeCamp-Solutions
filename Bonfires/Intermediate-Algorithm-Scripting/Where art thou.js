/*
Bonfire: Where art thou

*/
function where(collection, source) {
  var arr = []; //For storing the matched objects
  var count ; //For maintaining number of key-value matches
  function hasValue(obj, key, value) {
    if( obj.hasOwnProperty(key) && obj[key] === value)
      {
        count++; //If the value is matched increase the count
      }
}
  

   collection.some(function(collObj) { //Some function for iterating through all objects in Collection
     count = 0 ; //Initialize the count for each and every object to 0
       for(var prop in source){
         a = source[prop];
         hasValue(collObj,prop,a); //To check the key-value pair match
       }
      if(count>=Object.keys(source).length){ //If the count is equal or more,add the object to the array object
        arr.push(collObj);
      }
    });
   return arr;
}

//where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
