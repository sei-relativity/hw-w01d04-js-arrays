

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