function telephoneCheck(str) {
  // Good luck!
  str = str.replace(/[^0-9]/g,"");
  Num = parseInt(str);
 if(typeof Num== "number" && str.length>=10 ){
   if(str.length==11 &&str.match(/^1/)==1){
   return true;
   }
   else if(str.length == 10){
     return true;
   }
   else
     return false;
 }
  return false;
  //return true;
}



telephoneCheck("1(555)555-5555");
