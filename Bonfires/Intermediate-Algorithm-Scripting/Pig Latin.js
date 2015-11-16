/*
Bonfire: Pig Latin
Author:Ashok
*/
function translate(str) {
  var regex =/[aeiou]/gi;
  if(regex.test(str[0])){
    str = str+'way';
  }
  else{
    i = str.indexOf(str.match(regex)[0]);
    
  str = str.slice(i)+str.substr(0,i)+'ay';
  }
 return str;
}

translate("helloworld");
