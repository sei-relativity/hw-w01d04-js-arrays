const summation = function(number){
    let result=0;
    for(let n=1 ; n<=number ; n++){
    result+= n;}
    
    return result;}
    


const sum = function(num){
    let result=0;
        
for(let x=1; x<=num ; x++){
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
    for(let i= 0; i<word.length; i++){
                     rvs= word[i] + rvs;}

    return rvs;}

const addDashes = function(words){

    return words.join("-") ;}



        
     

