// SOLUTION TO PROBLEM

function pizzaCalc(slices, people) {
    let slicesAmt = slices;
    
    let peopleAmt = people;

    let pizzaAmt = (slices / people);

    let total = pizzaAmt.toFixed(2);

    console.log(`Since there are ${peopleAmt} people and ${slicesAmt} slices of pizza, every person gets ${total} slices of pizza. Enjoy!`);
}

pizzaCalc(8, 4); // Since there are 4 people and 8 slices of pizza, every person gets 2 slices of pizza. Enjoy!

pizzaCalc (10, 6); // Since there are 6 people and 10 slices of pizza, every person gets 1.67 slices of pizza. Enjoy!


// SAME CONCEPT BUT AS A WEBSITE
document.addEventListener("DOMContentLoaded", function() {

    const slicesNum = document.getElementById('slices-number');
    const peopleNum = document.getElementById('people-number')
    const resultDisplay = document.getElementById('result');
    const submitButton = document.getElementById('submit')

    // Event listener for form submission
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        const slicesTotal = parseInt(slicesNum.value);
        const peopleTotal = parseInt(peopleNum.value);

        const slicesPerPerson = (slicesTotal / peopleTotal);
        const finalNum = slicesPerPerson.toFixed(2);

        resultDisplay.textContent = `Each person can have ${finalNum} slices of pizza.. Enjoy!`;
    });
});