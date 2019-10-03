// Q1:

function sumNum(n) {
    let total = 0;
      for(let i = 1; i <= n; i++){
        total += i;
      }
      return total;
  }

//Q2:

function sumEven(n) {
    let total = 0;
      for(let i = 1; i <= n; i++){
        if(i % 2 === 0) {
            total= total+ i;
            }
            }
            return total;
            }

//Q3:

function avr(num) {
    var total = 0, i;
    for (i = 0; i < num.length; i += 1) {
        total += num[i];
    }
    return total / num.length;
}

//Q4:

function reverseWord(str){
    let rev ="";
    for(let i= 0; i<str.length; i++){
        rev = str[i]+rev;
    }
    return rev;
}

//Q5:

let b = ["Hi","World"];

console.log(b.join('-'));

//Q6:


function count(n) {
    let arr = [];
    for (let i = 1; i<=n; i++) {
        arr.push(i.toString());

       
    }

    let j = n-1;
    for (j ; j>=i; i-- )
    {
        arr.push(j.toString());
    return arr.toString();
}

}

//Q9:
function findW(str) {
    let strSplit = str.split(' ');
    let lw = 0;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > lw){
        lw = strSplit[i].length;
       }
    }
    return lw;
  }
  findW("");
  
  
    //Q10:
   
    let number = [];
console.log(Math.max(number ));
  
      