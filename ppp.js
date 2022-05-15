
/*
var friendAge = [21, 22, 23, 21, 24, 21, 25];
var sameAge = [];
var element = 21 ;
for (let i = 0; i < friendAge.length; i++) {
   
    let index =friendAge.indexOf(element);
    if(index != -1){
        sameAge.push(element);
        
         
    }
}
console.log( sameAge);
*/
 




var friendAge = [21, 22, 23, 21, 24, 21, 21, 21, 25];
var sameAge = [];
var element = 21;
var idx = friendAge.indexOf(element);
while(idx != -1){
    sameAge.push(idx);
    idx = friendAge.indexOf(element, idx + 1);
}
console.log(sameAge.length);
 