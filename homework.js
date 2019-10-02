// Please create a branch called homework. Then, create a file named homework.js to save your solutions.

// Create a function that will get the sum of the numbers between 1 and n and return the answer 
const summation = function (n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum;
}
summation(5) // should return 15 because 1+2+3+4+5=15



// Create a program to get the sum of all the even numbers in a group 
const summation = function (n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
summationEven(5) // should return 6 because 2+4=6


// Create a function to get the average of a group of numbers 

const avg = function (nums) {
    let sum = 0; //inital
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum / nums.length; // to get the averge
}
avg([8, 2, 2, 4]) // should return 4


// Create a function to reverse the letters in a word
function reverseWord(word) {
    reversedWord = word.split("").reverse().join("")
    return reversedWord();
}
reverse("caterpillar") // should return "rallipretac"


// Create a function that takes an array of words and combines them with a dash

const addDashes = function (words) {
    fixedWord = words.join("-");
    return fixedWord;
}
addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"


// Function that will count up to a number and back down and return a string of the climb 
const countUpAndDown = function (num) {
    let climb = "" // init
    for (let i = 0; i < num; i++) {
        climb += i + 1;
    }
    for (let i = num - 1; i > 0; i--) {
        climb += i;
    }
    return climb;
}
countUpAndDown(3) // should return "1 2 3 2 1"


// Write a function that will tell you all of the words in an array that contain the letter `a`
const wordsWithA = function (words) {
    const n = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes("a")) {
            n.push(words[i]);
        }
    }
    return n;
}
wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']


// Write a function that will tell you all of the words in an array that contain a specified letter

const wordsWithLetter = function (letter, words) {
    const newArray = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(letter)) {
            newArray.push(words[i]);
        }
    }
    return n;
}
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']


// Function that returns the longest word in sentence 
const longestWord = function (words) {
    const newArray = words.split(' ').reduce(function (longestWord, currentWord) {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, "");
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(letter)) {
            newArray.push(words[i]);
        }
    }
    return n;
}
const longestWord = function (word) {
    let str = word.split(" ");
    let longest = 0;
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            result = str[i];
        }
    }
    return result;
}
longestWord("The cat in the house s"); // should return "house"


// Function that returns the largest even number
const largestEvenNumber = function(nums) {
    let largest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (largest< nums[i]) {
            largest = nums[i];
        }
    }
    return largest
}
largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"

