/*
Bonfire: Spinal Tap Case
Author:Ashok
*/
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str =  str.replace(/\s/g,'-').replace(/_/g,'-').replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase();
  return  str;
 }
spinalCase('thisIsSpinalTap');
