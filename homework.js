const summation = function(num){
    let result1 = ""
    let sum = 0
    for(let i = 1; i <= num; i++ ){
        sum += i 
        result1 += i+"+"
    }
    let result = result1.slice(0,-1);
    result +="="+sum
    return "the sum is "+sum+ " because " + result
}
console.log(summation(5))
///////////////////////////////////////////////////////////////////////
const summationEven = function(num){
    let result1 = ""
    let sum = 0
    for(let i = 1; i <= num; i++ ){
        if(i%2==0){
            sum += i
            result1 += i+"+"
        }
    }
    let result = result1.slice(0,-1);
    result +="="+sum
    return "the sum is "+sum+ " because " + result
}
console.log(summationEven(5))
///////////////////////////////////////////////////////////////////////
const avg = function(arr){
    let avg =0
    for(i = 0; i<arr.length; i++){
        avg += arr[i]
    }
    avg = avg/arr.length
    return "The average is "+avg
}
console.log(avg([8, 2, 2, 4]))
///////////////////////////////////////////////////////////////////////
const reverse = function(word){return word.split("").reverse().join("")}
console.log(reverse("caterpillar"))
///////////////////////////////////////////////////////////////////////
const addDashes = function(arr){
    let comb=""
    for(i = 0; i<arr.length; i++){
        comb+= arr[i]+"-"
    }

    return "The average is "+comb.slice(0, -1)
}
console.log(addDashes(['test1', 'test2', 'test3']))
///////////////////////////////////////////////////////////////////////
const countUpAndDown = function(num){
    let result = ""
    for(i = 0; i<num; i++){
        result += (i+1)+" "
    }
    for(i = num-1; i>0; i--){
        result += i+" "
    }
    return result 
}
console.log(countUpAndDown(10))
///////////////////////////////////////////////////////////////////////
const findLetterWithA = function (arr){
    let result = []
    for(i = 0; i<arr.length; i++){
        for(j = 0; j<arr[i].length; j++){
            if(arr[i][j] == "a"){
                result.push(arr[i])
                break
            }
                
        }
    }
    return result
}
console.log(findLetterWithA(['cat', 'rabbit', 'dog', 'frog']))
///////////////////////////////////////////////////////////////////////
const findLetterWith = function (letter ,arr){
    let result = []
    for(i = 0; i<arr.length; i++){
        for(j = 0; j<arr[i].length; j++){
            if(arr[i][j] == letter){
                result.push(arr[i])
                break
            }
                
        }
    }
    return result
}
console.log(findLetterWith("o",['cat', 'rabbit', 'dog', 'frog']))
///////////////////////////////////////////////////////////////////////
const longestWord = function(string){
    let word = ""
    let arr = string.split(" ");
    for(i = 0; i<arr.length; i++){
        if(arr[i].length > word.length){
            word = arr[i]
        }
    }
    return word
}
console.log(longestWord("The cat in the house"))
///////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////
const wordLetters     = ['G', 'O', 'A', 'T'];
const guessedLetters  = ['_', '_', '_', '_'];
const guessLetter = function(letter){
    let counter = 0
    let c ;

    for(i = 0; i<wordLetters.length; i++){
        if(counter == guessedLetters.length-1){
            return "You win"+ guessedLetters
        }
        
        if(wordLetters[i] == letter){
            guessedLetters[i] = letter
            counter++
            return "Correct "+ guessedLetters
        }
    }
        return "Incorrect "+ guessedLetters
}
console.log(guessLetter('G')); // "Correct, G _ _ _"
console.log(guessLetter('I')); // "Incorrect, G _ _ _"
console.log(guessLetter('O')); // "Correct, G O _ _"
console.log(guessLetter('A')); // "Correct, G O A _"
console.log(guessLetter('L')); // "Incorrect, G O A _"
console.log(guessLetter('T')); // "You Win, G O A T"
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////