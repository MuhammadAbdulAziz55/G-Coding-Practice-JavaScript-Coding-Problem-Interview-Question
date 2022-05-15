var numbers = [45, 65, 78, 12, 3, 54, 65];
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
};
console.log('total of the numbers:', sum);

// do this same calculation with function
function getArraySum(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78, 12, 3, 54, 65];
var result = getArraySum(numbers);
console.log('total of the number', result);

var total = getArraySum([12, 34, 54, 64, 66, 66, 55, 86]);
console.log('total of the number:', total);

