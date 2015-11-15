/*
Bonfire: Search and Replace
Author:Ashok
*/

function myReplace(str, before, after) {
  var re = new RegExp(before,"gi");

  if(/[A-Z]/.test(before[0])){
    after = after[0].toUpperCase()+after.slice(1);
    
  }
  var  newStr =  str.replace(re,after);
 
 return newStr;
 
}

myReplace("This has a spellngi error", "Spellngi", "spelling");
