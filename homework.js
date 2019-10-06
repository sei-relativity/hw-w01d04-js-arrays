//1. I tried but does not work !!  :(

    const summatiom = function(n) {
        if(n == 0) {
            return 0;
        } else {
            return n - 1 + n
        }
    };
    
    //2. I tried but does not work !!  :(
    
    let sum = 0;
    const summatiomEven = function(n) {
        if(n == 0) {
            return 0
        } else {
            if(n % 2 == 0) {
                return sum += sum;
            }
        }
        return sum;
    };
    
    //3.
    
    let x = 0;
    const avg = function(arr) {
        for(let i=0; i < arr.length; i++ ) {
            x += arr[i] 
        } return (x / arr.length)
    };
    
    //4. 
    
    const reverse = function(str){
        return str.split("").reverse().join("");
    };
    
    //5. 
    
    const addDashes = function(arr) {
        return arr.join("-")
    
    };
    
    //6. 
    
    let arr = [];
    let i = 0;
    const countUpAndDown = function(n) {
        for(i; i < n; i++) {
            arr.push(i);
        }
        for(i; i >= n; i--) {
            arr.push(i);
        }
        return arr;
    };
    
    //7. I tried but does not work !!  :(
    
    let result = [];
    let i = 0;
    const wordWithA = function(arr) {
        for(i; i < arr.length; i++) {
            if(arr[i].indexOf("a") == -1) {
                result.push(arr[i]);
            }
        }
        return result;
    };
    
    //8.
    
    const result = [];
    let i = 0;
    const wordsWithLetter = function(x, arr) {
        for(i; i < arr.length; i++) {
            if (arr[i].indexOf(x) != -1 ) {
                result.push(arr[i]);
            }
        }
        return result;
    };
    
    //9.
    
    let arr = [];
    let result = "";
    let i = 0;
    const longWord = function(sentence) {
        arr = sentence.split(" ");
            for(i; i < arr.length; i++) {
                if(arr[i].length > result.length){
                    result = arr[i];
                }
            }
        return result;
    };
    
    
    //10. 
    
    let tmp = 0;
    let i = 0;
    const largestEvenNumber = function(arr) {
        for(i; i < arr.length; i++) {
            if(arr[i] % 2 == 0) {
                if(arr[i] > tmp) {
                    tmp = arr[i];
                }
            }
        }
        return tmp;
    };
    
    // end