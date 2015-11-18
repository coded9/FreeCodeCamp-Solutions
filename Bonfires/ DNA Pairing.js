/*
Bonfire: DNA Pairing
Author:Ashok
*/
function pair(str) {
 arr = [];
  str = str.split("");
  str.forEach(function(char){
    switch(char){
      case 'A':
        arr.push(["A","T"]);
       break;
      case 'T':
        arr.push(["T","A"]);
         break;
      case 'G':
        arr.push(["G","C"]);
         break;
      case 'C':
        arr.push(["C","G"]);
        break;
         
    }
  });
  return arr;
}

pair("GCG");
