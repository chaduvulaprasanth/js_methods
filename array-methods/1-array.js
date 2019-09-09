// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
  // one way to find largest number using filter
    var num = 0;
    numbers.filter((e) =>{
      if(num < e){
      num = e;
        }
    })
    console.log(num);

  // using array method to find the largest number
    console.log(Math.max.apply(null, numbers))


// Find longest string in strings
    // using filter method
      var longestString = "";
      strings.filter((e) => {
        if(e.length > longestString.length){
          longestString = e;
        }
      })
      console.log(longestString)
    
    // using forEach method
      var longestString = "";
      strings.forEach((e) => {
          if(e.length > longestString.length){
            longestString = e;
          }
        })
      console.log(longestString)


// Find all the even numbers
    // using filter method
      numbers.filter((e) => {
        if(e % 2 == 0){
          return (e);
        }
      })
     
    // using forEach method 
      numbers.forEach((e) => {
        if(e % 2 == 0){
          console.log(e);
        }
      })


// Find all the odd numbers

    // using filter method
      numbers.filter((e) => {
        if(e % 2 !== 0){
          return (e);
        }
      })
     
    // using forEach method 
      numbers.forEach((e) => {
        if(e % 2 !== 0){
          console.log(e);
        }
      })

// Find all the words that contain 'is' use string method 'includes'
    // using filter method
      strings.filter((e) => {
        if(e.includes("is")){
        return (e);
          }
      })

    // using forEach method
      strings.forEach((e) => {
        if(e.includes("is")){
        console.log(e);
          }
      }) 
    

// Find all the words that contain 'is' use string method 'indexOf'

// Check if all the numbers in numbers array are divisible by three use array method (every)

//  Sort Array from smallest to largest

// Remove the last word in strings

// Add a new word in the array

// Remove the first word in the array

// Place a new word at the start of the array use (upshift)

// Make a subset of numbers array [18,9,7,11]

// Make a subset of strings array ['a','collection']

// Replace 12 & 18 with 1221 and 1881

// Replace words with string in strings array

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

// Create new array with firstname and lastname

// Sort the array created above alphabetically
