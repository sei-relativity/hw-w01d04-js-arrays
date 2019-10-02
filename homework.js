// 1
const summation = function (n) { 
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

// 2
const summationEven = function (n) {
    let sumEvens = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0){
            sumEvens += i ;
        }
    } return sumEvens;
}

// 3
let array = [8,2,2,4]
const avg = function(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += element;        
    } return sum /array.length;
}
// 4
// 5
// 6
// 7
// 8
// 9
// 10



