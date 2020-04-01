// Program should ask user for first number, second number and operation

//Display welcome message and instructions
console.log("Welcome to the calculator program!");
console.log("\n1. add(+) \n2. substract(-) \n3. multiply(*) \n4. divide(/)");

// User input hard coded
const hardInput = {
  num1: 3,
  num2: 5,
  operation: "+",
}

// The function returns the product of num1 and num2
function add(num1, num2) {
  return num1 + num2;
}

// The function returns the product of num1 and num2
function substract(num1, num2) {
  return num1 - num2;
}

// The function returns the product of num1 and num2
function multiply(num1, num2) {
  return num1 * num2;
}

// The function returns the division of num1 and num2
function divide(num1, num2) {
  if (num2 === 0) {
    console.log("Division by zero is not allowed!");
    return null
  } else {
    return num1 / num2;
  }
}

function calculate(input){
  let num1 = input['num1']
  let num2 = input['num2']
  let operation = input['operation']

  // Check for number to be a valid integer isInteger() might also work
  if (isNaN(num2) || isNaN(num1)){
    console.log("Not a number");
    return process.exit(1);
  }

  // Calculates the operation by calling the appropriate function
  switch(operation) {
    case 'add':
    case '+':
      console.log("The result is: " + add(num1, num2));
      break;

    case 'substract':
    case '-':
      console.log("The result is: " + substract(num1, num2));
      break;

    case 'multiply':
    case '*':
      console.log("The result is: " + multiply(num1, num2));
      break;

    case 'divide':    
    case '/':
      if (divide(num1, num2) === null) {
        console.log("Please try another number!");
      } else {
        console.log("The result is: " + divide(num1, num2));
      }
      break;
    default:
      console.log("Invalid input");
  } 
}

calculate(hardInput);