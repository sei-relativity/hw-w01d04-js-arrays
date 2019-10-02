// 1.Create a function that will get the sum of the numbers
//  between 1 and n and return the answer
const summation = function(num){
    let result = 0;
    for (let i = 0; i <=num ; i++){
        result += i;
    }
    return result;
}


// 2. Sum of even numbers
const sumEven = function(num) {
    if (num === 0) {
        return 0;
    } else {
        if (num % 2 === 0) {
            return sumEven(num - 1) + num
        } else return sumEven(num - 1) + 0;
    }
}
console.log(sumEven(5))


// 3. Create a program to get the sum of all the even numbers in a group
const avg = function(num) {
    let x = 0;
    for (let i = 0; i < num.length; i++) {
        x = x + num[i]
    }
    return (x / num.length)
}
console.log(avg([8, 2, 2, 4]))



// 4. Create reverse for caterpillar
const str = "caterpillar";
str.split('').reverse().join('');

// 5. addDashes
const words = ['test1', 'test2', 'test3'];
words.join("-");

// 6. countUpAndDown
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


// 7. words with A
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
wordWithA(['cat', 'rabbit', 'dog', 'frog'])

// 8. Words with letter G
const wordsWithLetterG = function (letter, x) {
    const n = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i].includes(letter))
            n.push(x[i]);
    }
    return n;
}
wordsWithLetterG("g", ['cat', 'rabbit', 'dog', 'frog'])

// 9. Longest word in the sentence
const longestWord = n => {
    let words = n.split(" ");
    let wordsLength = [];
    let res;
    for (i = 0; i < words.length; i++) wordsLength.push(words[i].length);
    res = words[wordsLength.indexOf(Math.max(...wordsLength))];
    console.log(res);
  };
  longestWord("The cat in the house");

  // 10. The largest even number
  const largestEvenNumber = function(arr){
    let num = 0 
    for(i = 0; i<arr.length; i++){
        if(arr[i]%2==0){
            if(arr[i] > num){
                num = arr[i]
           }
        }   
    }
    return num
}
console.log(largestEvenNumber([1,2,3,10,40,17,0]))