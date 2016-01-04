##Temporary solution
```
function rot13(encodedStr) {
 var replaceObj ={
  "A":"N",
  "B":"O",
  "C":"P",
  "D":"Q",
  "E":"R",
  "F":"S",
  "G":"T",
  "H":"U",
  "I":"V",
  "J":"W",
  "K":"X",
  "L":"Y",
  "M":"Z",
  "N":"A","O":"B","P":"C","Q":"D","R":"E","S":"F","T":"G","U":"H","V":"I","W":"J","X":"K","Y":"L","Z":"M"
  
  
};
  var re = new RegExp(Object.keys(replaceObj).join("|"),"gi");
  encodedStr = encodedStr.replace(re,function(matched){
    return replaceObj[matched];
  });
  return encodedStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
```
