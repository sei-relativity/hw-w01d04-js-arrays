// Create a function that will get the sum of the numbers between 1 and n and return the answer
const summation = function (n) {

    let sum;

    for (let i = 1; i <= n; i++) {

        sum += i;
    }

    return sum;
}

summation(5); // should return 15 because 1+2+3+4+5=15


// Create a program to get the sum of all the even numbers in a group
const summationEven = function(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {

        if (i % 2 === 0) {

            sum += i;
        }
    }

    return sum;
}

summationEven(5); // should return 6 because 2+4=6

// Create a function to get the average of a group of numbers
const avg = function (numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        sum += numbers[i];
    }

    return sum / numbers.length;
}

avg([8, 2, 2, 4]); // should return 4


// Create a function to reverse the letters in a word
const reverse = function(word) {

    return word.split('').reverse().join();
}

reverse("caterpillar"); // should return "rallipretac"


// Create a function that takes an array of words and combines them with a dash
const addDashes = function (word) {

    return word.join('-');
}

addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"


// Function that will count up to a number and back down and return a string of the climb
const countUpAndDown = function(number) {

    let climb = "";

    for (let i = 1; i <= number; i++) {

        climb = "" + climb + i;
    }

    for (let i = number - 1; i >= 1; i--) {

        climb = "" + climb + i;
    }

    return climb;
}

countUpAndDown(3); // should return "1 2 3 2 1"


// Write a function that will tell you all of the words in an array that contain the letter`a`
const wordsWithA = function(array) {

    let contain = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i].includes("a")) {

            contain.push(array[i]);
        }

    }

    return contain;
}

(['cat', 'rabbit', 'dog', 'frog']); // should return ['cat', 'rabbit']


// Write a function that will tell you all of the words in an array that contain a specified letter
const wordsWithLetter = function (letter, array) {

    let contain = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i].includes(letter)) {

            contain.push(array[i]);
        }

    }

    return contain;
}

wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']); // should return ['dog', 'frog']


// Function that returns the longest word in sentence
const longestWord = function(word) {

    splittedWord = word.split(' ');
    theLongestWord = 0;

    for (var i = 0; i < splittedWord.length; i++) {

        if (splittedWord[i].length > theLongestWord) {

            theLongestWord = "The longest" +splittedWord[i].length;
        }
    }

    return theLongestWord;
}

longestWord("The cat in the house"); // should return "house"


// Function that returns the largest even number
const largestEvenNumber = function(numbers) {

    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {

            evenNumbers.push(numbers[i]);
        }
    }

    return Math.max(...evenNumbers);
}

largestEvenNumber([1, 2, 3, 10, 4, 7, 0]); // should return "10"