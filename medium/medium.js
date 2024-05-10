// Write a function that will allow you to calculate how many slices 
// of pizza x each person y would get if they shared evenly. The 
// function should return an interpolated string like Each person 
// gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal 
// in case there is no way to split the pizza evenly.

// Make variable from HTML elements
const form = document.querySelector('form');
const slicesInput = document.getElementById('slices-number');
const peopleInput = document.getElementById('people-number');
const resultInput = document.getElementById('result');


function pizzaCalc() {

    let slices = parseFloat(slicesInput.value);
    let people = parseFloat(peopleInput.value);

    let result = slices / people;

    resultInput.textContent = `Each person gets ${result} slices of pizza`;
}  
