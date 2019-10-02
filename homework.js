//  1.
//  sum all numbers, from 1 to num
const summation = function (num) {
    let sum = 0;
    for (i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

//  2.
//  sum all even numbers equal or less than num
const summationEven = function (num) {
    let sum = 0;
    if (num % 2 == 1)
        num--;

    return summation(num / 2) * 2;
}

//  3.
//  average numbers array
const avg = function (numArr) {
    let sum = 0;
    for (i = 0; i <= numArr.length; i++) {
        sum += numArr[i];
    }
    return (sum / numArr);
}

//  4.
//  reverse string
const reverse = function (inString) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    return reverseArray.join("");
}

//  5.
//  combine an array of words with dash
const addDashes = function (wordArr) {
    return wordArr.join("-");
}

//  6.
//  count up then down in a string
const countUpAndDown = function (num) {
    const countArr = [num];
    for (i = num - 1; i > 0; i--) {
        countArr.unshift(i);
        countArr.push(i);
    }
    return countArr.join(" ");
}

//  7.
//  list words with an A from a word array
const wordsWithA = function (wordArr) {
    const wordsA = [];
    for (i = 0; i <= wordArr.length; i++) {
        if (wordArr[i].includes('a') || wordArr[i].includes('A'))
            wordsA.push(wordArr[i]);
    }
    return wordsA;
}

//  8.
//  list words with a selected letter from word array
const wordsWithLetter = function (letter, wordArr) {
    const wordsL = [];
    for (i = 0; i <= wordArr.length; i++) {
        if (wordArr[i].includes(letter))
            wordsL.push(wordArr[i]);
    }
    return wordsL;
}

//  9.
//  find the longest word in a string
const longestWord = function (inString) {
    let wordArr = inString.split(' ');
    let largestWord = 0;
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > wordArr[largestWord].length) {
            largestWord = i;
        }
    }
    return wordArr[largestWord];
}

//  10.
//  return the largest even number from numbers array
const largestEvenNumber = function (numArr) {
    let largestEven;

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
            if (numArr[i] > largestEven) {
                largestEven = numArr[i];
            }
        }
    }
    return largestEven;
}