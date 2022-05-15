var marks = [44, 55,33, 56, 77, 88, 99, 98];
var max = marks[0];
for (let i = 0; i < marks.length; i++) {
    let element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('Highest value is:' , max);