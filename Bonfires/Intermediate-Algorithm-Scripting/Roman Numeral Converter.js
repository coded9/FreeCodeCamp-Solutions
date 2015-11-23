/*
Bonfire:Roman Numeral converter
Author:Ashok
*/

function convert(num) {
  //Array for storing the split values of given number(1984 = 1000+900+80+4)
  var numArr = [];
  //Finding the length of number
  len = num.toString().length;
  //Loop for obtaining split values
  for(i=0;i<len;i++){
    r = num%10;
    num = Math.floor(num /10);
    numArr.push(r*Math.pow(10,i));
     }
  //Reversing the array so that we get the split values in order
  numArr = numArr.reverse();
  //Array for storing the roman numerals
  var romArr =[];
  //Store all the possible numerical values
  numValue = [1000000,500000,100000,50000,10000,5000,1000,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1];
  //Store the corresponding roman numerals
  romValue = ['M!','D!','C!','L!','X!','V!','M','CM','DCCC','DCC','DC','D','CD','CCC','CC','C','XC','LXXX','LXX','LX','L','XL','XXX','XX','X','IX','VIII','VII','VI','V','IV','III','II','I'];
  //Loop through each value in numArr   
  for(i=0;i<numArr.length;i++){
  //Find the corresponding index in numValue and find its corresponding roman numeral in romValue
  romArr.push(romValue[numValue.indexOf(numArr[i])]);
    }
 return romArr.join("");
}

convert(44);

#With one for loop
function convert(num) {
  //Array for storing the split values of given number(1984 = 1000+900+80+4)
  var numArr = [];
  //Finding the length of number
  len = num.toString().length;
  //Array for storing the roman numerals
  var romArr =[];
  //Store all the possible numerical values
  numValue = [1000000,500000,100000,50000,10000,5000,1000,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1];
  //Store the corresponding roman numerals
  romValue = ['M!','D!','C!','L!','X!','V!','M','CM','DCCC','DCC','DC','D','CD','CCC','CC','C','XC','LXXX','LXX','LX','L','XL','XXX','XX','X','IX','VIII','VII','VI','V','IV','III','II','I'];
//Loop through each value in numArr   
for(i=0;i<len;i++){
  
    r = num%10;
    num = Math.floor(num /10);
  //Obtain the split value and store in numArr,here get split values in decreasing order
    numArr.push(r*Math.pow(10,i));
  //Find the corresponding index in numValue and find its corresponding roman numeral in romValue
  romArr.push(romValue[numValue.indexOf(numArr[i])]);
}
 								
  //Reverse the array since we get the roman values in decreasing order
  return romArr.reverse().join("");
}

convert(44);
