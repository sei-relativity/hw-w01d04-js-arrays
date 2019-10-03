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
    

onst avg = function(num) {
    let j = 0;
    for (let i = 0; i < num.length; i++) {
        j = j + num[i]
    }
    return (j / num.length)
}
console.log(avg([8, 2, 2, 4]))
4

const reverse = function(word) {

    return word.split("").reverse().join("");
}
console.log(reverse("caterpillar"))
rallipretac 

array = ['test1', 'test2', 'test3']
const addDashes = function(arr){
    return arr.join("-");
}
(3) ["test1", "test2", "test3"] 

let i = 0;
const countUpAndDown = function(num){
    for ( i = 1 ; i <= num ; i++){
        console.log(i);

        if (i == num){
          for (let j = num - 1 ; j > 0 ; j-- ){
              console.log(j);
          }}}}

          const wordWithA = function(list){
            for (i = 0 ; i < list.length ; i ++){
                if (list[i].indexOf("a") != -1){
                    contains.push(list[i]);
                }
            }
            return contains;
        }
        wordWithA(['cat', 'rabbit', 'dog', 'frog'])

        const longestWord = n => {
            let words = n.split(" ");
            let wordsLength = [];
            let res;
            for (i = 0; i < words.length; i++) wordsLength.push(words[i].length);
            res = words[wordsLength.indexOf(Math.max(wordsLength))];
            console.log(res);
          };
          longestWord("The cat in the house");

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