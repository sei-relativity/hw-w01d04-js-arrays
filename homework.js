//Create a function that will get the sum of the numbers between 1 and n and return the answer
//summation(5) should return 15 because 1+2+3+4+5=15

const summation = function (num{
    let sum = 0;
    for (let i =1; i<=num ; i++{
        sum +=i;{
            retun sum;
        }
        
//Create a program to get the sum of all the even numbers in a group
//summationEven(5) should return 6 because 2+4=6

const summationEven = function (num) {
    let sum = 0;
       for(let i =1; i<= num; i++){
           if(i%2 == 0) 
           sum += i; }
       return sum;
      }
//Create a function to get the average of a group of numbers
//avg([8, 2, 2, 4]) should return 4

const avg = function (nums){
    let sum = 0;
      for(let i=0; i < nums.length; i++) {
            sum += nums[i]; }
      let avg = sum / nums.length;
      return avg;
     }
     //reate a function to reverse the letters in a word
//reverse("caterpillar") // should return "rallipretac"
const reverse = function (word){
   let  reversed = "";
    for(let i = word.length-1;  i>=0 ;  i--){
      eversed += word  [i] ; }
      return   reversed;
}



//Create a function that takes an array of words and combines them with a dash
//addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"

function addDashes(words){
    let dashed = "";
     for(let i=0; i < words.length; i++){
         dashed += words[i] + "-"; }
       return dashed.slice(0, dashed.length-1);
    }
    



//Function that will count up to a number and back down and return a string of the climb
//countUpAndDown(3) // should return "1 2 3 2 1"




//Write a function that will tell you all of the words in an array that contain the letter `a`
//wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']




//Write a function that will tell you all of the words in an array that contain a specified letter
//wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']




//Function that returns the longest word in sentence
//longestWord("The cat in the house") // should return "house"
function long1(string) {
    let d1  = string.split(" ");
    let  lng = 0;
    let  word = null;
   for (let i = 0; i < d1.length; i++)
 {
        if (lng < d1[i].length) {
            lng = d1[i].length;
            word = d1[i];
        }
    }
    return word;
 }

undefined
long1("qwdf jgikgioboi ljohlogohohiohioih qrqr");
"ljohlogohohiohioih"




//Function that returns the largest even number
//largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"

let mMX = function (even) {

    even.sort((x, m) => m - x);
        
    for (var i = 0; i  < even.length;  i++) {
    
    if (even[i] % 2 == 0) return even[i];}}
    
    MX([1,2,3,4,5]);