/*
Bonfire: Convert HTML Entities
Author:Ashok
*/
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
