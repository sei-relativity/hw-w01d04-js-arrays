
<ol>
  <li>Create a function that will get the sum of the numbers between 1 and n and return the answer
  <br>
    <code>summation(5) // should return 15 because 1+2+3+4+5=15</code>

const summa= function(num){
    let sum = 0
    for(let i = 1; i <= num; i++ ){
        sum += i 
        result1 += i++
    }
    let result = result1.slice(0,-1);
    result +="="+sum
    return "the sum is "+sum+ " because " + result
}
console.log(summa(5))
15
  </li>
  <li>Create a program to get the sum of all the even numbers in a group
  <br>
    <code > summationEven(5) // should return 6 because 2+4=6</code>
  </li>
  const summaEven = function(num){
    let sum = 0
    for(let i = 1; i <= num; i++ ){
        if(i%2==0){
            sum += i
            result1 += i++
        }
    }
    let result = result1.slice(0,-1);
    result +="="+sum
    return "the sum is "+sum+ " because " + result
}
console.log(summationEven(5)) 
the sum is 6 because 2+4=6
    
  <li>Create a function to get the average of a group of numbers 
  <br>
    <code> avg([8, 2, 2, 4]) // should return 4</code>
  </li>
  const avg = function(num) {
    let j = 0;
    for (let i = 0; i < num.length; i++) {
        j = j + num[i]
    }
    return (j / num.length)
}
console.log(avg([8, 2, 2, 4]))
4

  <li>Create a function to reverse the letters in a word
  <br>
    <code > reverse("caterpillar") // should return "rallipretac"</code>
  </li>
  const reverse = function(word) {

    return word.split("").reverse().join("");
}
console.log(reverse("caterpillar"))
rallipretac 

  <li>Create a function that takes an array of words and combines them with a dash
  <br>
    <code > addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"</code>
  </li>
  array = ['test1', 'test2', 'test3']
const addDashes = function(arr){
    return arr.join("-");
}
(3) ["test1", "test2", "test3"] 

  <li>Function that will count up to a number and back down and return a string of the climb
  <br>
    <code> countUpAndDown(3) // should return "1 2 3 2 1"</code>
  </li>

  let i = 0;
const countUpAndDown = function(num){
    for ( i = 1 ; i <= num ; i++){
        console.log(i);

        if (i == num){
          for (let j = num - 1 ; j > 0 ; j-- ){
              console.log(j);
          }}}}


  <li>Write a function that will tell you all of the words in an array that contain the letter `a`
  <br>
    <code > wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']</code>
  </li>

const wordWithA = function(list){
    for (i = 0 ; i < list.length ; i ++){
        if (list[i].indexOf("a") != -1){
            contains.push(list[i]);
        }
    }
    return contains;
}
wordWithA(['cat', 'rabbit', 'dog', 'frog'])


  <li>Function that returns the longest word in sentence
  <br>
    <code>longestWord("The cat in the house") // should return "house"</code>
  </li>
const longestWord = n => {
    let words = n.split(" ");
    let wordsLength = [];
    let res;
    for (i = 0; i < words.length; i++) wordsLength.push(words[i].length);
    res = words[wordsLength.indexOf(Math.max(wordsLength))];
    console.log(res);
  };
  longestWord("The cat in the house");

  <li>Function that returns the largest even number
  <br>
    <code>largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"</code>
  </li>
const largestEvenNumber = function(num) {

    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (count <= num[i]) {
            count = num[i];
        }
    }
    return count;
}

console.log(largestEvenNumber([1, 2, 3, 10, 4, 7, 0]))
</ol>