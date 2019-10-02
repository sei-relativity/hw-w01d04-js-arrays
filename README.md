[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Array HW

Please create a branch called `homework`. Then, create a file named `homework.js` to save your solutions.

<ol>
  <li>Create a function that will get the sum of the numbers between 1 and n and return the answer
  <br>
    <code>summation(5) // should return 15 because 1+2+3+4+5=15</code>
  </li>
//My answer:

const sum = function(n){
  let a =0 ;
for(let i = 1;i <= n ; i++){
	a=a+i
}
return a;
}
console.log(sum(5));
---------------------------------------------------------
  <li>Create a program to get the sum of all the even numbers in a group
  <br>
    <code > summationEven(5) // should return 6 because 2+4=6</code>
  </li>
//My answer:
const susummationEven = function(n){
  let a = 0 ;

  for(let i = 0 ; i <= n ; i++ ){
  if(i%2 ==0)
{
  a = a + i;	
} 
  }
   return a;
}
console.log(susummationEven(5))
---------------------------------------------------------
  <li>Create a function to get the average of a group of numbers 
  <br>
    <code> avg([8, 2, 2, 4]) // should return 4</code>
  </li>
//My answer:

const average = function(avg){
let sum=0;
let av = 0;
  for(let i = 0 ; i < avg.length; i++ ){
     sum=sum + avg[i];
  }
  av=sum/(avg.length)
 console.log(av);
}
const avg=[8, 2, 2, 4];
average(avg)
---------------------------------------------------------
  <li>Create a function to reverse the letters in a word
  <br>
    <code > reverse("caterpillar") // should return "rallipretac"</code>
  </li>
//My answer:

const rev =function(text){
text = text.split("")
text = text.reverse()
text = text.join("")
return text
}
rev("caterpillar");

//"rallipretac"
---------------------------------------------------------
  <li>Create a function that takes an array of words and combines them with a dash
  <br>
    <code > addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"</code>
  </li>
//My answer:

const addDashes =function(text){
text = text.join("-")
return text
}
addDashes(['test1', 'test2', 'test3']);


//"test1-test2-test3"
---------------------------------------------------------
  <li>Function that will count up to a number and back down and return a string of the climb
  <br>
    <code> countUpAndDown(3) // should return "1 2 3 2 1"</code>
  </li>
//My answer:

const countUpAndDown = function(number){
    for (let i = 1; i < number; i++) {
        console.log(i);        
    } 
    for (i = number; i > 0; i--) {
        console.log(i);
    }
}
countUpAndDown(3)
/*
1
2
3
2
1
*/
---------------------------------------------------------
  <li>Write a function that will tell you all of the words in an array that contain the letter `a`
  <br>
    <code > wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']</code>
  </li>
//My answer:

const wordsWithA =function(text){
let a = text.pop()
a = text.pop()
return text;
}
wordsWithA(['cat', 'rabbit', 'dog', 'frog']);

// ["cat", "rabbit"]
---------------------------------------------------------
  <li>Write a function that will tell you all of the words in an array that contain a specified letter
  <br>
    <code > wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']</code>
  </li>
//My answer:
const wordsWithLetter =function(text){
let a = text.shift ()
a = text.shift ()
return text;
}
wordsWithLetter( ['cat', 'rabbit', 'dog', 'frog']);

//["dog", "frog"]
---------------------------------------------------------
  <li>Function that returns the longest word in sentence
  <br>
    <code>longestWord("The cat in the house") // should return "house"</code>
  </li>
//My answer:
const longestWord = function(word) {
  Array = word.split(' ')
  let x = '';
    for (let i = 0; i < Array.length; i++) {
        if (x.length <= Array[i].length) {
            x = Array[i];
        }
    }
    return x;
}
console.log(longestWord("The cat in the house"))

//house
---------------------------------------------------------
  <li>Function that returns the largest even number
  <br>
    <code>largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"</code>
  </li>
</ol>
//My answer:
const largestEvenNumber = function(LEN){
    let number = 0 ;
    for(i = 0; i<LEN.length; i++){
        if(LEN[i] % 2 === 0){
            if(LEN[i] > number){
                number = LEN[i];
           }
        }   
    }
    return number;
}
console.log(largestEvenNumber([1,2,3,10,4,7,0]))

//10
---------------------------------------------------------
## Extra Practice

Create word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

- Create two global arrays: one to hold the letters of the word (e.g. `['F', 'O', 'X']`), and one to hold the current guessed letters (e.g. it would start with `['_', '_', '_]'` and end with `['F', 'O', 'X']`)`.
- Write a function called guessLetter that will:
  - Take one argument, the guessed letter.
  - Iterate through the word letters and see if the guessed letter is in there.
  - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
  - When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
  - It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
  - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

```js
// start of the game
const wordLetters     = ['G', 'O', 'A', 'T'];
const guessedLetters  = ['_', '_', '_', '_'];


// playing the game
guessLetter('G'); // "Correct, G _ _ _"
guessLetter('I'); // "Incorrect, G _ _ _"
guessLetter('O'); // "Correct, G O _ _"
guessLetter('A'); // "Correct, G O A _"
guessLetter('L'); // "Incorrect, G O A _"
guessLetter('T'); // "You Win, G O A T"
```
**How To: Make it like Hangman:**
- Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
- Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
- Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
