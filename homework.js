// 1. Create a function that will get the sum of the numbers between 1 and n and return the answer
const  suumation=function(N) {
    let total = 0;
      for(let i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }

  //2. Create a program to get the sum of all the even numbers in a group
  const  suumEven=function(N) {
    let total = 0;
      for(let i = 2; i <= N; i+=2){
        total += i;
      }
      return total;
  }
  // 3.Create a function to get the average of a group of numbers 
  const avg=function([arr]) {
    let totalAvg=0 ; 
      for(let i=0;i<arr.length;i++) {
          totalAvg+=arr[i] ; 
          return totalAvg/arr.length ; 
        
      }

  }
// 4. Create a function to reverse the letters in a word
const reverse=function(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverse('hello');

// 5. Create a function that takes an array of words and combines them with a dash
const array=function([a]) {
   console.log(a.join("-"))

}
array(['hi','my','test']) ; 

// 6. Function that will count up to a number and back down and return a string of the climb




// 7. Write a function that will tell you all of the words in an array that contain the letter `a`
const wordsWithA=function([ar]) { 
let newArray=[] ; 
for(let i=0;i<ar.length;i++) { 
  if(ar[i].search("a"))
  newArray[i]= ar[i] ; 
}
return newArray ; 
}



// 8. Write a function that will tell you all of the words in an array that contain a specified letter
const wordsWithLetter=function(N,[ar]) { 
  let newArray=[] ; 
  for(let i=0;i<ar.length;i++) { 
    if(ar[i].search(N))
    newArray[i]= ar[i] ; 
  }
  return newArray ; 
  }


// 9. Function that returns the longest word in sentence
const longestWord=function(str) {
 
    let strSplit = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
    longestWord = strSplit[i].length;
       }
    }
    return longestWord  ;
  }
  



// 10. Function that returns the largest even number




