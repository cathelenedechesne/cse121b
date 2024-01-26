/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2
}

function addNumbers() {
    // Get the values of the HTML form controls and convert them to numbers
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    // Call the add function and assign the result to the sum input field
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Add a "click" event listener to the button with an ID of addNumbers
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    return number1 - number2;
};

// Function expression for subtracting numbers from HTML form controls
function subtractNumbers() {
    // Get the values of the HTML form controls and convert them to numbers
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    // Call the subtract function and assign the result to the difference input field
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

// Add a "click" event listener to the button with an ID of subtractNumbers
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

// Arrow function for multiplying numbers from HTML form controls
const multiplyNumbers = () => {
    // Get the values of the HTML form controls and convert them to numbers
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    // Call the multiply function and assign the result to the product input field
    document.querySelector('#product').value = multiply(factor1, factor2);
};

// Add a "click" event listener to the button with an ID of multiplyNumbers
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    // Get the values of the HTML form controls and convert them to numbers
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    // Call the divide function and assign the result to the quotient input field
    document.querySelector('#quotient').value = divide(dividend, divisor);
};

// Add a "click" event listener to the button with an ID of divideNumbers
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.querySelector('#getTotal').addEventListener('click', function () {
    // Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field
    let subtotalValue = Number(document.querySelector('#subtotal').value);

    // Check if the membership checkbox has been checked to apply a 20% discount
    let isMember = document.querySelector('#member').checked;
    let discount = isMember ? 0.2 : 0; // 20% discount if the user is a member, 0% otherwise

    // Calculate the total including the discount
    let total = subtotalValue - (subtotalValue * discount);

    // Output the total to the total span in the format shown with two decimals using a template string
    document.querySelector('#total').textContent = `$ ${total.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of array
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */

// Use the filter() array method to find all of the odd numbers and assign the result to the HTML element with an ID of odds
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */

// Use the filter() array method to find all of the even numbers and assign the result to the HTML element with an ID of evens
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

// Use the reduce() array method to sum the array elements and assign the result to the HTML element with an ID of sumOfArray
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);
/* Output Multiplied by 2 Array */

// Use the map() array method to multiply each element in the array by 2 and assign the result to the HTML element with an ID of multiplied
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied
document.querySelector('#sumOfMultiplied').textContent = numbersArray
    .map(number => number * 2)
    .reduce((sum, number) => sum + number, 0);