/*
Bonfire: Convert HTML Entities
Author:Ashok
*/
Method1 :
function convert(str) {
  // &colon;&rpar;
var replaceObj ={
  "&": "&amp;",
  "<": "&lt;",
  ">":"&gt;",
  '"':"&quot;",
  "'":"&apos;"
  
};
  var re = new RegExp(Object.keys(replaceObj).join("|"),"gi");
  str = str.replace(re,function(matched){
    return replaceObj[matched];
  });
return str;
}


convert("Dolce & Gabbana");

Method2:
function convert(str) {
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
return str;
}


convert("Dolce & Gabbana");


