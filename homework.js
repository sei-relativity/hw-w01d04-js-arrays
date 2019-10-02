

 const summation = function (n) {
     return (n*(n+1))/2
     
 }

 /**sum of even num */
const summationEven = function (n) {
    let last_even_num =0 
    if (n%2===0)
        last_even_num =n
    else
        last_even_num =(n-1)
    
    let N = ((last_even_num+2)/2)-1
    return N*(N+1)
    
}

/*retuen  ave */
const avg =function(arr){
    let i =0;
    let sum=0
    while (i<arr.length){
        sum +=arr[i];
        i++;
    }
    return sum/arr.length
}

/*part4**/
/*
reference 
https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
*/

const reverse =function(arr){

    
    return arr.split("").reverse().join("");
}

/***part5  */
const addDashes = function(arr){
    return arr.join("-")
}

/*part6****/

const countUpAndDown =function(num){
    let result ="";
    let i = 1
    while (i<num){
        result+=" " +i
        i++
    }
    while (i>=1){
        result+=" " +i
        i--
    }
    return result
}

/*part 7*/
const wordsWithA = function(arr){
    let result  =[];
    let expr = /a/;
    let i=0;
    while (i<arr.length){
        if (arr[i].search(expr)==1)
            result.push(arr[i])
        i++;
    }
    return result 
}

///*part 8*//
const wordsWithLetter = function(letter, arr){
    let result  =[];
    let temp = letter ;
    let expr = new RegExp(temp);
  //console.log(expr)
    let i=0;
    while (i<arr.length){
    //  console.log(arr[i].search(expr))
        if (arr[i].search(expr)!=-1)
            result.push(arr[i])
        i++;
    }
    return result 
}

/***part 9 */

const longestWord = function(text){
    const string_arr = text.split(" ");
      let i=1;
      let max_length=0;
      while(i<string_arr.length){
          if ((string_arr[i].length) > (string_arr[i-1].length))
              max_length=i;
            i++;
      
      }
      return string_arr[max_length];
  }
  

/*part 10 */

const largestEvenNumber =function(arr_one ){
    
    let arr =[]
    let j =0
    
    while (j<arr_one.length){
        if (arr_one[j]%2==0)
            arr.push(arr_one[j])
        j++
    }

    let max_value = arr[0];
    let i =1
    while (i<arr.length){
        if (arr[i]> max_value)
            max_value=arr[i]
        i++;
    }
    return max_value
}

