/* Bonfire: Factorialize a Number
  Code by Ashok
  http://www.freecodecamp.com/coded9
*/


function factorialize(num) {
  var i =1;
  test = num;
  if(num ==0 ){
    return 1;
  }
  else{
    while(i<test){
    num = num *i;
    i++;
  }
  }
  return num;
}

factorialize(5);
