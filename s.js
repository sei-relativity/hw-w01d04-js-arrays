
  
//a function that will get the sum of the numbers between 1 and n and return the answer
const theSum = function (x) {
    let sum = 0;
    for (let i = 0; i <= x; i++) {
        sum += i;
    }
    return sum;
}

//a program to get the sum of all the even numbers in a group
const theEvenSum = function (x) {
    let sum = 0;
    for (let i = 0; i <= x; i++) {
        if (i % 2 == 0)
            sum += i;
    }
    return sum;
}
//a function to get the average of a group of numbers
const theAverage = function (x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum / x.length;
}
//a function to reverse the letters in a word
const theReverser = function (x) {
    const letters = [];
    for (let i = 0; i < x.length; i++) {
        letters.push(x[i]);
    }
    return letters.reverse().join("");
}
//a function that takes an array of words and combines them with a dash
const theCombiner = function (x) {
    return x.join('-');
}
//a function that will count up to a number and back down and return a string of the climb
const theUpDown = function (x) {
    const uD = [];
    for (let i = 1; i < x; i++) {
        uD.push(i);
    }
    for (let i = x; i >= 1; i--) {
        uD.push(i);
    }
    return uD.join(' ')
}
//a function that will tell you all of the words in an array that contain the letter `a`
const theA = function (x) {
    const a = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i].includes('a') || x[i].includes('A'))
            a.push(x[i]);
    }
    return a;
}
//a function that will tell you all of the words in an array that contain a specified letter
const theSpecific = function (letter, x) {
    const a = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i].includes(letter))
            a.push(x[i]);
    }
    return a;
}
//a function that returns the longest word in sentence
const theLongest = function (x) {
    const splitted = x.split(' ');
    let longest = '';
    for (let i = 0; i < splitted.length; i++) {
        if (longest.length < splitted[i].length)
            longest = splitted[i];
    }
    return longest;
}
//a function that returns the largest even number
const theLargestEven = function (x) {
    let largest = x[0];
    for (let i = 0; i < x.length; i++) {
        if (largest < x[i] && x[i] % 2 == 0)
            largest = x[i];
    }
    return largest;
}
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
