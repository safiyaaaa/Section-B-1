// Fizz Buzz

// This is code for the game fizzbuzz https://en.wikipedia.org/wiki/Fizz_buzz

// Given a number as an input this should return fizz if it divides by 3, return buzz if it divides by 5, return fizzbuzz if it divides by 3 and 5. Otherwise it should return the number.

// This should work for numbers of a reasonable size (not absolutely massive) and for numbers of a reasonable size it should return fizz, buzz, fizzbuzz or a number.

// Make sure you are testing all branches of the code. This includes all possible condtions met in the if statements and all the return values made possible by them.

// Write extensive tests for this code and fix any bugs that you find until all your tests pass. Make sure you comment against tests that were failing and note that they were failing, why they failed and what you did to fix them.

const fizzBuzz = (num) => {
  if (typeof num != 'number' || num == undefined || num == 0) {
    throw new TypeError('Invalid');
  }
  //Moved the order of the else if statements to pass test cases 1.3
  else if (num % 3 == 0 && num % 5 == 0) {
    return 'fizzbuzz'
  }
  else if (num % 5 == 0) {
    return 'buzz'
  }
  else if (num % 3 == 0) {
    return 'fizz'
  }
  else {
    return num 
  }
}
module.exports = fizzBuzz;
