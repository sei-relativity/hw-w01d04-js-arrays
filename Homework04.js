let user= prompt("Enter number"); 
let k = [1,2,3,4,5,6,7];
let m = [6,2,2,4];


//1
function getSum (user) {
    let sum =0;
        for (let i=1; i<user; i++){
            sum += i;
    }return sum;
}

console.log(getSum());

//2
function getSumEven (k){
    let sum =0;
    for (let i=0; i<k.length; i++){
        if (k[i] %2 ==0){
            sum +=k[i];
        }
    } return sum;
}          

console.log (getSumEven(k));
//3
function getAvg (k){
    let avg=0
    let sum=0;
    for (let i=0;i<k.length;i++){
            sum += k[i];}
        
            avg = sum/k.length;
                return avg;
    }
    console.log(getAvg(m));
//4
function reverse (k){
    var new_arr = k.reverse();
    console.log(new_arr);
}

reverse(k);

//4
function reverse1 (k){
    var splitString = k.split("");
    var reverseArray = splitString.reverse();
    var JoinArray = reverseArray.join("");
    return JoinArray;
}
console.log(reverse1(k));
//5
function addDash(k){
    console.log(k.join('-'));
    }

console.log(addDash(k));

//6
    function countDown (k) {
        let count = [k];
        for (let i = k - 1; i > 0; i--) {
            //Adding front elements
            count.unshift(i);
            //adding back elements
            count.push(i);
        }
        return count.join(" ");
    }
    console.log(countDown(k));

//7

function wordArr (k) {
    let wordsA = [];
    let wordS = "";
    
    for (let i = 0; i <= k.length; i++) {
        wordS = ""+k[i];
        if (wordS.indexOf('a') != -1 || wordS.indexOf('A') != -1)
            wordsA.push(wordS);
    }
    return wordsA;
}
console.log(wordArr (k));

//8

const wordsWithLetter = function (letter, wordArr) {
    const wordsL = [];
    let wordS = ""
    for (i = 0; i <= wordArr.length; i++) {
        wordS = ""+wordArr[i];
        if (wordS.indexOf(letter) != -1)
            wordsL.push(wordS);
    }
    return wordsL;
}

//  9

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

//  10 

const largestEvenNumber = function (numArr) {
    let largestEven = -999;

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
            if (numArr[i] > largestEven) {
                largestEven = numArr[i];
            }
        }
    }
    return largestEven;
} 
    
