// var business = 450;
// var minister = 399;
// if(business > minister){
//     console.log('Business is bigger');
// }
// else{
//     console.log('Minister is bigger');
// }

var business = 750;
var minister =800;
var sochib = 1000;

var max = Math.max(business, minister, sochib);
console.log(max);


/** 
var business = 750;
var minister =800;
var sochib = 1000;
if(business > minister){
    if(business > sochib){
        console.log('Business is bigger'); 
    }
    else{
        console.log('Sochib is bigger')
    }
}

else{
    if(minister > sochib){
        console.log('Minister is bigger'); 
    }
    else{
        console.log('Sochib is bigger')
    }

}
*/

// Finding max of three value with function
function maxOfThree(x, y, z){
    maxVal = 0;
    if(x > y){
        maxVal = x;
    }
    else{
        maxVal = y;
    }
    if(z > maxVal){
        maxVal = z;
    }
    return maxVal;
}

console.log(maxOfThree(1,0,1));
console.log(maxOfThree(0,-10,-20));
console.log(maxOfThree(1000,510,440));
