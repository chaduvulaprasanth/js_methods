var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
  var longword = "";
  words.forEach((e) => {
    if(e.length > longword.length){
        longword = e;
    }
  })
  console.log(longword)



var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
  function sumArray(array){
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    var sum = array.reduce(reducer);	
    return sum;
  }
  sumArray(numbers1)
// Use the above sum and calculate the average.
  var average = sum/numbers1.length;
  console.log(average);



var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
  function averageNumbers(array){
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    var total = array.reduce(reducer);
    var average = total/array.length;
    return average;
  }
  averageNumbers(numbers2)



var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(array){
  var wordslength = 0;
  array.forEach((e) => wordslength += e.length)
  return wordslength / array.length;
}

