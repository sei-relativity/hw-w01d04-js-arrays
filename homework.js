
const summation = function(n) {
    let sum = 0;
    for(let i = 1 ; i <= n ; i++ ){
        sum = sum + i; }
        return sum;
    }

const summationEven = function(n) {
    let sum = 0 ;
    for (let i = 1 ; i <= n ; i++){
       if (i%2 == 0){
        sum = sum + i;
       }
    }
    return sum;
}

const avg = function(n1,n2,n3,n4){    
       sum = 0;
       const avg = [n1,n2,n3,n4]; 
      for(let i = 0 ; i < avg.length ; i++)
       { sum = sum + avg[i]; }
       return  sum/ avg.length; 
    }


const reverse = function(word){
let rev = word.reverse();
return rev;
}

const addDashes = function(word){
   dashes= array.join("-");
   return dashes;
}

const countUpAndDown = function(num1,num2,num3){
    const count = [num1,num2,num3];
    return count + " " + count.reverse();
}

const wordsWithA = function(w1, w2,w3,w4){
    const words = ["w1","w2","w3","w4"];
    const aWords =[];
    for (let i = 0 ; i < words.length ; i++){
       if ( words[i].includes("a") ) {
       aWords = words[i].push;
       }
    }
return aWords;
}

const largestEvenNumber = function(num1,num2,num3,num4,num5){
let arr = [(num1,num2,num3,num4,num5)];
let evenNumber = arr[0];

for(let i = 0 ; i> arr.length ; i++) {
    if (arr[i] % 2 == 0 && evenNumber < arr[i] ) {
        evenNumber = arr[i] 
    }
    }
    return evenNumber;
}

