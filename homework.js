// 1

const summation = function(n){
    let total = 0;
    for (let i = 0; i <=n ; i++){
        total += i;
    }
    console.log(total);
}

// 2

const summationEven = function(n){
    let total = 0;
    for (let i = 0; i <=n ; i+=2){
        total += i;
    }
    console.log(total);
}

// 3

const avg = function(n) {
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        result = result + n[i]
    }
    console.log(result / n.length);
}

// 4

const reverse = "caterpillar";
reverse.split('').reverse().join('');

// 5

const addDashes = ['test10', 'test20', 'test30'];
addDashes.join(" - ");

// 6

const countUpAndDown = function(n1){
    for ( i = 1 ; i <= n1 ; i++){
        console.log(i);

        if (i == n){
          for (let n2 = n1 - 1 ; n2 > 0 ; n2-- ){
              console.log(n2);
          }  
        }
    }
}

// 7

const words = [];
const a = [];
const wordsWithA = function(words){
    for (i = 0 ; i < words.length ; i ++){
        if (words[i].indexOf("a") != -1){
            a.push(words[i]);
        }
    }
    console.log(a);
}

// 8

const wordsWithLetter = function (letter, word) {
    const words = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].includes(letter))
            words.push(word[i]);
    }
    return words;
}

// 9

const longestWord = function(word) {
    sentence = word.split(' ')
    let w = '';
      for (let i = 0; i < sentence.length; i++) {
          if (w.length <= sentence[i].length) {
              w = sentence[i];
          }
      }
      console.log(w);
  }

  // 10

  const largestEvenNumber = function(n){
    let num = 0 ;
    for(i = 0; i<n.length; i++){
        if(n[i] % 2 === 0){
            if(n[i] > num){
                num = n[i];
           }
        }   
    }
    return num;
}