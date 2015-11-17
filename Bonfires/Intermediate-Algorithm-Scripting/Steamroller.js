/*
Bonfire: Steamroller
Credits:Rafase282
Author:Ashok
*/
function steamroller(arr) {
  // I'm a steamroller, baby
 var flatArr = Array();
 flat = function(arg){
   if(Array.isArray(arg)){
      for(var a in arg){
        flat(arg[a]);
      }
      }
   else{
     flatArr.push(arg);
   }
 };
 
 for(i=0;i<arr.length;i++){
   flat(arr[i]);
  }
 return flatArr;
}

steamroller([1, [2], [3, [[4]]]]);
