/*
Bonfire: Make a Person
*/

var Person = function(firstAndLast) {
  this.firstAndLast = firstAndLast;
  this.first = firstAndLast.split(" ")[0];
  this.last = firstAndLast.split(" ")[1];
  return firstAndLast;
};

Person.prototype = {
  
  getFullName:function() {
  return this.first+" "+this.last;
  },

getFirstName:function(){
  return this.first;
},

getLastName:function() {
  return this.last;
},
setFirstName:function(first) {
  this.first = first;
},
setLastName : function(last) {
  this.last = last;
},
setFullName : function(firstAndLast) {
  this.firstAndLast = firstAndLast;
  this.first = firstAndLast.split(" ")[0];
  this.last = firstAndLast.split(" ")[1];
}

};

var bob = new Person('Bob Ross');




