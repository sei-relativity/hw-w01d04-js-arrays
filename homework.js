// 1
const summation = function (n) { 
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

// 2
const summationEven = function (n) {
    let sumEvens = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0){
            sumEvens += i ;
        }
    } return sumEvens;
}

// 3
let array = [8,2,2,4]
const avg = function(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += element;        
    } return sum /array.length;
}

// 4
const reverse = function(word) {
    let arr = word.split("");
    let reversearr = arr.reverse();
    let joinarr = reversearr.join("");
    return joinarr;
}

// 5
array = ['test1', 'test2', 'test3']
const addDashes = function(arr){
    return arr.join("-");
}

// 6
const countUpAndDown = function(n){
    for (let index = 1; index <= n; index++) {
        console.log(index);        
    } for (index = n; index > 0; index--) {
        console.log(index);
    }
}

// 7
const arr =['cat', 'rabbit', 'dog', 'frog']
const wordWithA = function() {
    let arraywitha = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.includes("a")) {
            arraywitha.push(element);
        }
    } return arraywitha;
}

// 8
const arr =['cat', 'rabbit', 'dog', 'frog']
const wordWithLetter = function(letter) {
    let arraywitha = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.includes(letter)) {
            arraywitha.push(element);
        }
    } return arraywitha;
}

// 9
const longestword = function(sentense){
    let splitSentence = sentense.split(" ")
    let maxWord = 0;
    let result = "";
    for (let index = 0; index < splitSentence.length; index++) {
        if (splitSentence[index].length > maxWord) {
            maxWord = splitSentence[index].length;
            result = splitSentence[index];            
        }
    } return "longest word in the sentence is " +  result;
}

// 10
const arr = [1,2,3,10,4,7,0];
const largeEvenNumber = function (arr) {
    let evens = [];
    let largestEven = "";
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]%2 == 0) {
            evens.push(arr[index]);
        }
    
    } for (let i = 0; i < evens.length; i++) {
        if (evens[i] > largestEven) {            
            largestEven = evens[i];
        }
    } return "largest even number is " + largestEven;
}



