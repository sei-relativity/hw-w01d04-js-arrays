1#  

const summation = function(array)
{
    return array.reduce(function(a,b){return a+b},0);
}




2#
const summationEven=function(num)
{
    let number =0;
    for (i=1;i<=num;i++)
    {
         if(i%2 == 0)
          number+=i;
    }
return number;
}



3# 
const numAvg= function(arr)
{
   let num=0;
for (let i=0;i<arr.length;i++)
{
   num+=arr[i];
 }
    return num/arr.length;
 }


 4#
 const reverseWord = function(word)
 {
    let rvs ="";
    for(let i= 0 ; i<word.length ; i++)
    {
      rvs= word[i] + rvs;
     }

    return rvs;
  }

// method two and i like this 
    function reverseWord(word) 
    {
    reversedWord = word.split("").reverse().join("")
    return reversedWord();
    }


5#
const addDashes = function (array)
 {
    word = array.join("-");
    return word;
 }



6#
const countUpAndDown = function (num) 
 {
    const upDown = [];
    for(let i=1 ; i < num ; i++) 
    {
        upDown.push(i);
    }

    for (let i = num; i>=1; i--) 
    {
        upDown.push(i);
    }

    return upDown.join(" ");
    }


    7#
    const wordsWithA = function(array) 
    {
       const word = []
       for (let i = 0; i < array.length; i++) 
    {
        if (array[i].indexOf('a') != -1)
         {
            word.push(array[i]);
        }
    }
            return word;
}

7#
const wordsWithA = function(array) 
{
    const word = [];
    for (let i = 0; i < array.length; i++)
     {
        if (array[i].indexOf('A') != -1)      // notice the case of letter not matter inside indexof()
        {  
            word.push(array[i]);
        }
    }
            return word;

}



8#

const wordsWithLetters = function(letter,array)
 {
    const word = [];
    for (let i = 0; i < array.length; i++)
     {
        if (array[i].indexOf(letter) != -1) 
        { 
            word.push(array[i]);
        }
    }
            return word;
 }


    9#
   const longestWord = function (word) 
   {
    let wordOne = word.split(" ");
    let wordTwo = "";
    for (let i=0 ; i < wordOne.length ; i++)
     {
        if (wordTwo.length < wordOne[i].length)
            wordTwo = wordOne[i];
       }
             return wordTwo;
    }



10#
const largestEvenNumber = function (array) 
{ 
 let num = [];
    for (let i=0 ; i < array.length ; i++)
     {
        if (array[i] % 2 == 0 && num < array[i])

                num = array[i];
      }
                  return num;
    }
}