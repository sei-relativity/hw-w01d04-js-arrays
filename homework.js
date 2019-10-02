//--------- 1
const summation = function(num){
    let result = 0;
    for (let i = 0; i <=num ; i++){
        result += i;
    }
    return result;
}
//----------- 2
const evenSummation = function(num){
    let result = 0;
    for (let i = 0; i <=num ; i+=2){
        result += i;
    }
    return result;
}
evenSummation(5);

//------------- 3

let sum = 0;
const list = [];
const getAvg = function(list){
    for (let i = 0; i < list.length; i++){
        sum += list[i];
    }
    let avg = sum / list.length - 1;
    return Math.floor(avg);
};
//-------------- 4
let rWord = "";
const reverse = function(word){
    let a = "";
    for (let i = word.length-1 ; i >= 0 ; i--){
         a = word.charAt(i);
        rWord += a;
    };
    console.log(rWord);
};
//--------------- 5
const list = [];
const addDashes = function(list){
       let dashed = list.join('-');
		console.log(dashed)
}
addDashes(['fahad', 'badr' , 'saud']);

//----------------- 6
let i = 0;
const countUpAndDown = function(num){
    for ( i = 1 ; i <= num ; i++){
        console.log(i);
    
        if (i == num){
          for (let j = num - 1 ; j > 0 ; j-- ){
              console.log(j);
          }  
        }
    }
}
//------------------ 7
const list = [];
const contains = [];
const wordWithA = function(list){
    for (i = 0 ; i < list.length ; i ++){
        if (list[i].indexOf("a") != -1){
            contains.push(list[i]);
        }
    }
    return contains;
}
wordWithA(['fahad', 'josef']);
//---------------- 8 
const list = [];
const contains = [];

const wordWithLetter = function(letter,list){
    for (i = 0 ; i < list.length ; i ++){
        if (list[i].indexOf(letter) != -1){
            contains.push(list[i]);
        }
    }
    return contains;
}
wordWithLetter('j', ['fahad', 'josef']);
//----------------- 9
const findLongestWord = function (str) {
    const list = str.split(" ");
    const longestWord = list.reduce((a, b) => {
      if(b.length > a.length) {
        return b;
      } else {
        return a;
      }
    });
    return longestWord;
  }
  findLongestWord("programming is life");
  
//---------------- 10 
let largest = 0;
const list = [];
const largestEvenNumber = function(list){
    for (let i = 0 ; i < list.length ; i++){
        if (list[i] % 2 == 0){
        if (list[i] > largest){
            largest = list[i];
        }
    }
    }
    return largest;
}
