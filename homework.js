const summation = function(number){
    let result=0;
    for(let n=1 ; n<=number ; n++){
    result+= n;}
    
    return result;}
    


const sum = function(num){
    let result=0;
        
for(let x=1 ; x<=num ; x++){
    if(x %2 == 0)
    result+=x;}
        
    return result;}
         
        

const average = function(array){
    let avg= 0;
    for(let a=0 ; a<array.length ; a++){
    avg+= array[a];}
    
    return avg/array.length;}


const reverse = function(word){
    let rvs ="";
    for(let i= 0 ; i<word.length ; i++){
                     rvs= word[i] + rvs;}

    return rvs;}

const addDashes = function(words){

    return words.join("-") ;}


const countUpAndDown = function (number) {
    const upDown = [];
    for(let i=1 ; i < number ; i++) {
        upDown.push(i);}
            
    for (let i = number; i>=1; i--) {
        upDown.push(i);}
            
    return upDown.join(" ");}
      
    
const wordWithA = function(words){
    let a = [];
    for(let i=0 ; i < words.length ; i ++){
        if (words[i].indexOf("a") != -1){
        a.push(words[i]);}}
                
    return a;}


const wordsWithLetter = function (letter, array) { 
    let specifiedLetter = [];
    for(let i=0 ; i < array.length ; i++) {
        if (array[i].indexOf(letter) != -1)
        specifiedLetter.push(array[i]);}
            
        return specifiedLetter;}
        

const longestWord = function (word) {
    let s = word.split(" ");
    let longestW = "";
    for (let i=0 ; i < s.length ; i++) {
        if (longestW.length < s[i].length)
            longestW = s[i];}
            
     return longestW;}
        

const largestEvenNumber = function (array) {
    let largest = [];
    for (let i=0 ; i < array.length ; i++) {
        if (array[i] %2 == 0 && largest < array[i])
        largest = array[i];}
        
        return largest;}

        