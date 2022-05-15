function animalsCalculator(depth){

var animals = 0;
if(depth <= 10){
    animals = depth * 50;
}
else if(depth <= 20){
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animals = firstPart + secondPart;
}
else{
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    animals = firstPart + secondPart + thirdPart;
}
return animals;
}

var count = animalsCalculator(22);
console.log(count);