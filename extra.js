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

 const word = ['t', 'u', 'r', 't', 'l', 'e']
 const guessed = ['_', '_', '_', '_', '_', '_'];
 let count = 0


 const guessTheWord = function(letter) {
     count = count + 1
     for (let i = 0; i < word.length; i++) {
         if (count <= 6) {
             if (letter === word[i]) {
                 if (guessed[i] == '_') {
                     guessed[i] = letter;
                     if (word.toString() === guessed.toString()) {
                         count = 0;
                         return '           you wiiiiin            ' + guessed

                     }
                     count = count - 1;
                     return ('you got one right keep it going   ' + guessed)
                 }
             }
             if (i === word.length - 1) {
                 return ('          soory try again         ' + guessed)
             }
         } else {
             return ('LOOOOOOSER    \n' +
                 '-------\n' +
                 '      |\n' +
                 '      O\n' +
                 '     /|\\ \n' +
                 '      |\n' +
                 '     / \\ \n')
         }
     }
 }

 console.log(guessTheWord('t'))
 console.log(guessTheWord('b'))
 console.log(guessTheWord('a'))
 console.log(guessTheWord('c'))
 console.log(guessTheWord('r'))
 console.log(guessTheWord('l'))
 console.log(guessTheWord('a'))
 console.log(guessTheWord('u'))
 console.log(guessTheWord('e'))
 console.log(guessTheWord('t'))
 console.log(guessed)


 /////   -------
 /////         |
 /////         O
 /////        /|\
 /////         |
 /////        / \
 /////
 /////

 for (let i = 0; i < guessed.length; i++) {
     guessed[i] = ['_']
 }


 console.log(guessTheWord('t'))
 console.log(guessTheWord('b'))
 console.log(guessTheWord('a'))
 console.log(guessTheWord('c'))
 console.log(guessTheWord('r'))
 console.log(guessTheWord('l'))
 console.log(guessTheWord('a'))
 console.log(guessTheWord('k'))
 console.log(guessTheWord('s'))
 console.log(guessTheWord('o'))