const fizzBuzz = require('./fizzBuzz');

//fizzBuzz test plan located in the FB Test Plan.pdf file attached within the replit

//Correctness test suit
describe('1. Testing all possible results', () => {
  test.each([
      [3, 'fizz'],
      [6, 'fizz' ],
      [9, 'fizz'],
    ])('1.1 Confirm numbers divisible by 3 return correct string', (a, expected) => {
      expect(fizzBuzz(a)).toBe(expected);
  });//The test.each syntax is based of the Jest framework, enabling all tests to be ran individually. Initally I had stacked ten expect statements(assertions .toBe). In doing so only one test title would show in my shell, signifying only one test has been ran instead of passing all ten individual tests of all unique string outputs
  
  test.each([
      [5, 'buzz'],
      [10, 'buzz' ],
      [20, 'buzz'],
    ])('1.2 Confirm numbers divisible by 5 return correct string', (a, expected) => {
      expect(fizzBuzz(a)).toBe(expected);
  });
  
  test.each([
      [15, 'fizzbuzz'],
      [30, 'fizzbuzz' ],//This was a failed test, it returned 'buzz' to fix this I reordered the code in fizzBuzz.js file as code runs/reads from top to bottom
    ])('1.3 Confirm numbers divisible by 5 and 3 return correct string', (a, expected) => {
      expect(fizzBuzz(a)).toBe(expected);
  });

  test.each([
      [7, 7],
      [19, 19],
      [41, 41],
    ])('1.4 Confirm numbers not divisible by 5 and 3 returns number', (a, expected) => {
      expect(fizzBuzz(a)).toBe(expected);
  });
});//This test suit checks the validity of the fizzbuzz function for each possible outcome 'fizz', 'buzz', 'fizzBuzz' or the number, I reframe from testing all numbers within as there in no valid range specified in the requirements, as there are not unique outduts for each individual integer by testing each case of each four possible outcome passes I improve testing efficiency


//Reliability test suit
describe('2. Testing accuracy of fizzBuzz', () => {
  test('2.1 Equivalence partitioning lower range', () => {
   expect(() => fizzBuzz(0)).toThrow(TypeError('Invalid'));//This was a failed test, it returned 'fizzbuzz' to fix this I added an or statement num == 0 to the if statement I added in fizzBuzz.js file with the condition (typeof num != 'number' || num == undefined ) to return new TypeError('Invalid') so string output gives Invalid, rather that adding another if else statement within the fizzbuzz function for good coding practice. This was an appropriate output as everything divided by 0 gives 0
	});//No range is specified within requirements in the fizzBuzz.js file in this case therefore I did general equivalence testing dividing my input domain assumption into equivalent classes of data range bounds of 50. Sections tested are small, medium and large numbers, an advantage of this testing uncovers class errors thereby reducing time required to test multiple test cases
  

  test.each([
      [50, 'buzz'],
      [100, 'buzz'],
    ])('2.1.1 Equivalence partitioning lower range ', (a, expected) => {
      expect(fizzBuzz(a)).toBe(expected);
  });// I separated this from test case 2.1 to avoidstacked assertions, the test holds the same name title as its still testing Equivalence partitioning lower range

  test.each([
      [500, 'buzz'],
      [550, 'buzz'],
      [600, 'fizzbuzz'],
    ])('2.2 Equivalence partitioning middle range', (a, expected) => {
      expect(fizzBuzz(a)).toBe(expected);
  });
  
  test.each([
      [1000, 'buzz'],
      [1050, 'fizzbuzz'],
      [1100, 'buzz'],
    ])('2.3 Equivalence partitioning higher range', (a, expected) => {
      expect(fizzBuzz(a)).toBe(expected);
  });
});

//Robustness test suit
describe('3. Negative testing through Error guessing', () => {
  
  test.each([
      [33, 'fizzbuzz'],
      [85, 85],
      [27, 'buzz'],
    ])('3.1 Negatring testing correct output', (a, expected) => {
      expect(fizzBuzz(a)).not.toBe(expected);
  });

  test.each([
      [-27, 'fizz'],
      [-30, 'fizzbuzz'],
    ])('3.2 Negative numbers to give correct string', (a, expected) => {
      expect(fizzBuzz(a)).toBe(expected);
  });
  
  test('3.3 Input no argument', () => {
   expect(() => fizzBuzz()).toThrow(TypeError('Invalid'));//This was a failed test, to fix this I added an if statement in fizzBuzz.js file as explained in comment test case 2.1
	});

  test.each([ 
      [{ value: 30 }, TypeError('Invalid')],
      ['string', TypeError('Invalid')], 
      [[2,4,1], TypeError('Invalid')],
      [true, TypeError('Invalid')],

    ])('3.4 Other data types give error ', (a, expected) => {
      expect(() => fizzBuzz(a)).toThrow(expected);
  });//These tests are a form of negative testing, passing unexpected inputs into the boards to correctly throw an error and returns the string Invalid when invalid data types that don't match the requirements in the fizzBuzz.js, this test initially failed to fix this explanation is in test case 2.1
});

//Please check the FB Test Plan.pdf file that I attached to this replit to give an in depth insight to my testing approach

//To furthur confirm completeness I used https://htmlpreview.github.io/ and added the github URL of this replitgenerated in Version control

