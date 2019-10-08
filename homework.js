//1
const summation = function(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

summation(5); // should return 15 because 1+2+3+4+5=15


//2
const summationEven = function(n){
    let sum = 0;
    for (let i = 2; i <= n; i += 2){
        sum +=i;
    }
    return sum;   
}

summationEven(5) // should return 6 because 2+4=6

//3
 const avg = function(n){
     let sum = 0;
     for (let i = 0; i < n.length; i++){
         sum += n[i] ;
     }
     return sum/n.length;
 }
 avg([8, 2, 2, 4]) // should return 4

//4
const reverse = function (word){
    return word.split('').reverse().join('');
}
reverse("caterpillar") // should return "rallipretac"

//5
const addDashes = function(words){
    return words.join('-');
}
addDashes(['test1', 'test2', 'test3']);// should return "test1-test2-test3"

//6
const countUpAndDown = function(num){
    const str = [];
    str.push(num);
    for(let i = num-1; i > 0; i--){
        str.push(i);
        str.unshift(i);
    }
    return str.join(' ');
}
countUpAndDown(3) // should return "1 2 3 2 1"

//7
const wordsWithA = function(words){
    const str = [];
    for(let i = 0; i < words.length; i ++){
        if ( words[i].includes('a')){
            str.push(words[i]);
        }
    }
    return str;
}
wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']

//8
const wordsWithLetter = function(letter, words){
    const str = [];
    for(let i = 0; i < words.length; i ++){
        if ( words[i].includes(letter)){
            str.push(words[i]);
        }
    }
    return str;
}
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']

//9
const longestWord = function(sentence){
    const words = sentence.split(' ');
    let longest = words[0];
    for (let i = 0; i < words.length; i++){
        if ( words[i].length > longest.length ){
            longest = words[i];
        }
    }
    return longest;
}
longestWord("The cat in the house"); // should return "house"

//10
const largestEvenNumber = function(nums){
    let largest = nums[0];
    for(let i = 0; i < nums.length; i++){
        if ( !(nums[i] % 2 )&& nums[i] > largest ){
            largest = nums[i];
        }
    }
    return largest
}
largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"

//

const wordLetters     = ['G', 'O', 'A', 'T'];
const guessedLetters  = ['_', '_', '_', '_'];
const letterList = [];
let tries = 0;
const guessLetter = function(letter){
    let correct = false;
    if (!letterList.includes(letter)){
        letterList.push(letter);
        for (let i = 0; i < wordLetters.length; i++){
            if ( letter == wordLetters [i] ){
                correct = true;
                guessedLetters[i] = wordLetters[i];
            }
        }
        if ( correct ){
            if (guessedLetters.join(' ') == wordLetters.join(' ')){
                return `You Win, ${guessedLetters.join(" ")}`;
            } else { 
                return `Correct, ${guessedLetters.join(" ")}`;
            }
        }
        tries ++;
        return tries < 6 ? `Incorrect, ${guessedLetters.join(" ")}`:`\nYou lost.\n /-O\n| /|\\ \n| / \\\n| \n` ;
        
    }
    return `You already gussed that letter, try another letter.`
}