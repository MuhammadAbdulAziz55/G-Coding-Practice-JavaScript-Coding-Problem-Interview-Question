// Remove duplicate item from an array
var name = [3, 6, 7, 3, 2, 8, 2, 1, 2, 9, 11, 56];
var uniqueName = [];
for (let i = 0; i < name.length; i++) {
    const element = name[i];
    let index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element)
    }
}
console.log(uniqueName);

// ex-- 21 number how many times duplicated in this array
var friendAge = [21, 22, 23, 21, 24, 21, 25];
var sameAge = [21];
for (let i = 0; i < friendAge.length; i++) {
    const element = friendAge[i];
    let index = sameAge.indexOf(element);
    if(index != -1){
        sameAge.push(element);
        index = sameAge.indexOf(element, index -1)
    }
}
console.log(sameAge.length); /** expected output: 4 */


// ex-2
// Finding all the occurrences of an element
const indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
let idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]



// ex-3
// Finding if an element exists in the array or not and updating the array
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else {
        console.log( veggie + ' already exists in the veggies collection.');
    }
}

const veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.





// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
function count() {
    array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                document.write(current + ' comes --> ' + cnt + ' times<br>');
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.write(current + ' comes --> ' + cnt + ' times');
    }

}

var result = count();
console.log(result);

