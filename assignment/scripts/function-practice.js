console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log ( 'Test - should say "Josh":' , helloName( 'Josh' ) )

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log( `Test - display addition of two numbers (8 & 7):`, addNumbers ( 8, 7 ));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}

console.log( 'Test - return result of multiplying three numbers (14, 11, 27)', multiplyThree( 14, 11, 27));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }  
}

// console.log( 'Test - should return "true", as input number is 8:', isPositive ( 8 ));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[ array.length-1 ];
}

console.log( 'Test - should return 25:', getLast ( [8, 14, 7, 25 ] ) );

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (num in array) {
    if (num == value) {
      return true;
    }
  }

  return false;
}

console.log( 'Test - should return true: ', find( 1, [ 1, 2, 3, 4, 5, 6]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  
  let testVal = string.charAt (0);
  // Why can't I use string.charAt inside of my if statement but it works if I assign a seperate variable? Is there a better way?
  
  if ( testVal=letter ) {
    return true;
  }
  
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( sumArray ) {
  let sum = 0;
  // TODO: loop to add items
  for (total of sumArray) {
    sum += total;
  }

  return sum;
}

console.log( 'sumAll should return total of array input (41):', sumAll( [5, 7, 9, 8, 12] ) );

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function onlyPositives( inputArray ) {
  
  let positives = [];
  
  for (num of inputArray) {
    if (num > 0 ) {
      positives.push ( num );
    }
  //  console.log( 'Returns curent array during loop:', positives)
  }
  
  return positives;
}

console.log( 'Testing onlyPositives array function:', onlyPositives( [ 1, -5, 8, 0, -3, -4, 3, 9] ) );

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Potluck dinner! Only one rule: The dish each person brings
// has to start and end with the same letters as the person's name
// For example: josh clemons is bringing jalapeno poppers and
// harry smith is bringing hotdish.

// Write a function to test if the if the first and last
// letters match. Return true or false to indicate whether 
// the person is allowed to bring the dish.

// Assumes that name and dish are always lower case strings
function firstLast ( name, dish ) {
  
  let firstLetterName = name.charAt( 0 );
  let lastLetterName = name.charAt( name.length-1 );
  let firstLetterDish = dish.charAt( 0 );
  let lastLetterDish = dish.charAt( dish.length-1 );

  // console.log( 'firstLetterName:', firstLetterName, 'firstLetterDish:', firstLetterDish, 'lastLetterName:', lastLetterName, 'lastLetterDish', lastLetterDish)

  if (firstLetterDish == firstLetterName && lastLetterDish == lastLetterName) {
    return true;
  }
  
  return false;

}

console.log( 'Testing if firstLast returns true:', firstLast ('josh clemons', 'jalapeno poppers') );
console.log( 'Testing if firstLast returns false:', firstLast ('josh clemons', 'hotdish') );