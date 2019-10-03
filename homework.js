// 1
function summation(num)
 {
    var total = 0;
for ( var i=1; i<=num; i++)
{
    total += i;
}
console.log(total);
}
summation(5);
// Run: 15


// 2
function summationEven(num)
 {
    var total = 0;
for ( var i=1; i<=num; i++)
{
    if(num % 2 == 0)
    total += num;
    num--;
}
console.log(total);
}
// ???


// 3
function avv()
{
    var v=[8, 2, 2, 4]
    return v.avg()
}
// ????????????????????


// 4
function re(word)
{
let arr = word.split("");
    let rev = arr.reverse();
    let j = rev.join("");
    return j;
}
// Run: "aruoN"

// 5
function addDashes()
{
var str=["A","B","C","D","E"];
return str.join("-");
}
addDashes();
// Run: "A-B-C-D-E"


// 6 
 function countUpAndDown (n)
 {
    for (let i = 1; i <= n; i++) {
        console.log(i);        
    } for (i = n; i > 0; i--) {
        console.log(i);
    }
}


// 7
function wordsWithA (strArr) {
    const strArr = ["sara","Noura","ahmed"];
    const str2[];
    for (i = 0; i <= strArr.length; i++)
    {
        if (strArr[i].includes('a') || strArr[i].includes('A'))
            str2.push(strArr[i]);
    }
    return str2;
}


// 8

function wordsWithLetter (lt , strArr) {
    const wl = [];
    for (i = 0; i <= strArr.length; i++) {
        if (strArr[i].includes(lt))
            wl.push(strArr[i]);
    }
    return wL;
}

// 9
function longestWord()
{ 
var data = "Welcome to Corse";
console.log(data.split(" ").splice(-1));
}


// 10
function largestEvenNumber (numArr) {
    let largestEven;

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
            if (numArr[i] > largestEven) {
                largestEven = numArr[i];
            }
        }
    }
    return largestEven;
