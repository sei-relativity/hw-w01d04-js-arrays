// # JavaScript Array HW



// <ol>
//   <li>Create a function that will get the sum of the numbers between 1 and n and return the answer
//   <br>
//     <code>summation(5) // should return 15 because 1+2+3+4+5=15</code>

const summation = function(num) {
        if (num === 0) {
            return 0
        } else return summation(num - 1) + num;
    }
    //   </li>
console.log(summation(10))


//   <li>Create a program to get the sum of all the even numbers in a group
//   <br>
//     <code > summationEven(5) // should return 6 because 2+4=6</code>
//   </li>

const summEven = function(num) {
    if (num === 0) {
        return 0;
    } else {
        if (num % 2 === 0) {
            return summEven(num - 1) + num
        } else return summEven(num - 1) + 0;
    }
}
console.log(summEven(5))

//   </li>
//   <li>Create a function to get the average of a group of numbers 
//   <br>
//     <code> avg([8, 2, 2, 4]) // should return 4</code>
const avg = function(num) {
    let j = 0;
    for (let i = 0; i < num.length; i++) {
        j = j + num[i]
    }
    return (j / num.length)
}
console.log(avg([8, 2, 2, 4]))

//   </li>
//   <li>Create a function to reverse the letters in a word
//   <br>
//     <code > reverse("caterpillar") // should return "rallipretac"</code>
//   </li>

const reverse = function(word) {

    return word.split("").reverse().join("");
}
console.log(reverse("caterpillar"))

//   <li>Create a function that takes an array of words and combines them with a dash
//   <br>
//     <code > addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"</code>
//   </li>

const addDashes = function(arr) {

    return arr.join("-");
}
console.log(addDashes(['test1', 'test2', 'test3']))

//   <li>Function that will count up to a number and back down and return a string of the climb
//   <br>
//     <code> countUpAndDown(3) // should return "1 2 3 2 1"</code>
//   </li>

const countUpAndDown = function(num) {
    const arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    for (let i = num - 1; i > 0; i--) {
        arr.push(i)
    }
    return arr
}

console.log(countUpAndDown(3))

//   <li>Write a function that will tell you all of the words in an array that contain the letter `a`
//   <br>
//     <code > wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']</code>
//   </li>

const wordsWithA = function(arr) {
    const wordA = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('a') != -1) {
            wordA.push(arr[i]);
        }
    }
    return wordA;

}
console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog']))


//   <li>Write a function that will tell you all of the words in an array that contain a specified letter
//   <br>
//     <code > wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']</code>
//   </li>

const wordsWithLetter = function(letter, arr) {
    const word = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(letter) != -1) {
            word.push(arr[i]);
        }
    }
    return word;

}
console.log(wordsWithLetter('g', ['cat', 'rabbit', 'dog', 'frog']))

//   <li>Function that returns the longest word in sentence
//   <br>
//     <code>longestWord("The cat in the house") // should return "house"</code>
//   </li>

const longestWord = function(string) {
    wordArr = string.split(' ')
    let count = 0;

    for (let i = 1; i < wordArr.length; i++) {
        if (wordArr[i - 1].length <= wordArr[i].length) {
            count = wordArr[i];
        }
    }
    return count;
}

console.log(longestWord("The cat in the house"))

//   <li>Function that returns the largest even number
//   <br>
//     <code>largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"</code>
//   </li>
// </ol>

const largestEvenNumber = function(num) {

    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (count <= num[i]) {
            count = num[i];
        }
    }
    return count;
}

console.log(largestEvenNumber([1, 2, 3, 10, 4, 7, 0]))
    // ## Extra Practice

// Create word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. `['F', 'O', 'X']`), and one to hold the current guessed letters (e.g. it would start with `['_', '_', '_]'` and end with `['F', 'O', 'X']`)`.
// - Write a function called guessLetter that will:
//   - Take one argument, the guessed letter.
//   - Iterate through the word letters and see if the guessed letter is in there.
//   - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
//   - When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
//   - It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
//   - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// ```js
// // start of the game
// const wordLetters     = ['G', 'O', 'A', 'T'];
// const guessedLetters  = ['_', '_', '_', '_'];


// // playing the game
// guessLetter('G'); // "Correct, G _ _ _"
// guessLetter('I'); // "Incorrect, G _ _ _"
// guessLetter('O'); // "Correct, G O _ _"
// guessLetter('A'); // "Correct, G O A _"
// guessLetter('L'); // "Incorrect, G O A _"
// guessLetter('T'); // "You Win, G O A T"
// ```
// **How To: Make it like Hangman:**
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.