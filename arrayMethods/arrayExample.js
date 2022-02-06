// Below 2 way of array creation showed.
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const salad2 = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');
//console.log(salad2);
var expArray = new Array(2);
//console.log(expArray);
var expArray2 = new Array(1, 2);
//console.log(expArray2);
var len = salad.length;

// GET ELEMENTS
for (let i = 0; i < salad.length; i++) {
    //console.log(`Element at index ${i} is ${salad[i]}`);
}
// if i variable be declerated var in for loop, this print i = 7
// cause of i defined with let keyword this pint cause an error like reference error
// because var = function scoped, let = block scoped!
//console.log('i: '+ i);

// ADD ELEMENTS
//salad.push('🥜');
// push add an element at the end of the array 
//console.log(salad);

//salad.unshift('🥜');
// unshift add an element to the beginning of the array
//console.log(salad);

// REMOVE ELEMENTS
//salad.pop();
// pop removes an element from end of the array
//console.log(salad);

//salad.shift()
// shift remove an element from the beggining of an array
//console.log(salad);

// COPY AND CLONES
let saladCopy = salad.slice();
//console.log(saladCopy); 
//console.log(salad === saladCopy);// return false, bacause compares link to array objects not themselves
//salad[0] = 1;
//console.log('original: ', salad[0]); 
//console.log('shallow copy: ', saladCopy[0]);
// different original and shallow copy array's first element's

// DETERMINE IS AN ARRAY
//console.log(Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']));// true
//console.log(Array.isArray('🍅'));// false
//console.log(Array.isArray({'tomato': '🍅'}));// false
//console.log(Array.isArray([]));// ture

// ARRAY DESTRUCTING
// with destructing syntax
//let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕', 1];
//console.log(tomato, mushroom, carrot);

// without destructing syntax
/*let vegatables = ['🍅', '🍄', '🥕'];
let tomato = vegatables[0];
let mushroom = vegatables[1];
let carrot = vegatables[2];
console.log(tomato, mushroom, carrot);*/

// ASSIGN DEFAULT VALUE to VARIABLE
/*let [tomato, mushroom = '🥕'] = ['🍅', '🍄'];
console.log('tomato: ', tomato);
console.log('mushroom:', mushroom);*/

// skip an array element to map to variable with destructing
/*let [tomato, , carrot] = ['🍅', '🍄', '🥕'];
console.log(tomato);
console.log(carrot);*/

// NESTED ARRAY DESTRUCTING
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
// access 🥕 without destructing
/*const veg = fruits[4];
const carrot = veg[2];
console.log('carrort: ', carrot);*/
// access with short-hand syntax
/*var carrot = fruits[4][2];
console.log('carrot: ', carrot);*/
// access destructing syntax
/*let [,,,,[,,carrot]] = fruits;
console.log('carrot: ', carrot);*/

// SPREAD SYNTAX AND REST PARAMETER IN ARRAY DESTRUCTING
// rest parameter = ... left side of the destructing syntax
// spread syntax = ... righ side of destructing syntax

// REST PARAMETER
// map out the left elements of an array in a new array
// rest parameter MUST be LAST VARIABLE ın the destructing syntax.
/*const [tomato, mushroom, ...rest] = salad;
console.log(`tomato: ${tomato}, type: ${typeof(tomato)}`);
console.log(`mushroom: ${mushroom}, type: ${typeof(mushroom)}`);
console.log(`rest: ${rest}, type: ${typeof(rest)}`); // rest return Array
console.log(`first element of rest: ${rest[0]}`);*/

// SPREAD OPERATOR
// cloene/copy of an existing array
/*const saladClone = [...salad];
console.log(saladClone);
console.log(salad === saladClone);*/

// DESTRUCTING USE CASE
// Swap Values with Destructing
/*let [first, second] = ['😔', '🙂'];
console.log(`Before swap => first: ${first}, second: ${second}`);
[first, second] = [second, first];
console.log(`After swap => first: ${first}, second: ${second}`);*/

// Merge Arrays
/*const emotions = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];
const emotionalVeggies = [...emotions, ...veggies];
console.log(emotionalVeggies);*/

// Creae, Remove, Update, Access Arrays
/*const [first, second] =[[1, 2, 3], [4, 5, 6]];
const merge = first.concat(second);
// concat merge one or more arrays and return merged array, immutable method(not change existing arrays)
console.log(`first: ${first}, second: ${second}, merged: ${merge}`);
const third = [7, 8, 9];
const fullMerge = first.concat(second, third);
console.log(`Merged of first, second and third arrays: ${fullMerge}`);*/

/*const emotions = ['🙂', '😍', '🙄', '😟'];
//const joined = emotions.join();
// methods joins all the elements of the array using a seperator(default seperator is comma(,)) and return string
const joined = emotions.join('<=>');
// we can pass special seperator of our choised
console.log(joined);
console.log([].join()); // returns ""*/

// TODO: fill!