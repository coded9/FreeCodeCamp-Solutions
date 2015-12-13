/*
Bonfire: Make a Person
code by Rafase282
*/
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log(Object.keys(bob));

#MyVersion
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
