const wordLetters = ["G", "O", "A", "T"];
const guessedLetters = ["_", "_", "_", "_"];

const guessLetter = gl => {
  let success = false;
  for (i = 0; i < wordLetters.length; i++) {
    if (gl === wordLetters[i]) {
      guessedLetters[i] = gl;
      success = true;
    }
  }
  if (success == false) console.log(`Incorrect, ${guessedLetters.join(" ")}`);
  if (wordLetters.join("") == guessedLetters.join("")) {
    console.log(`You Win, ${guessedLetters.join(" ")}`);
  } else if (success == true) {
    console.log(`Correct, ${guessedLetters.join(" ")}`);
  }
};

guessLetter("G"); // "Correct, G _ _ _"
guessLetter("I"); // "Incorrect, G _ _ _"
guessLetter("O"); // "Correct, G O _ _"
guessLetter("A"); // "Correct, G O A _"
guessLetter("L"); // "Incorrect, G O A _"
guessLetter("T"); // "You Win, G O A T"
