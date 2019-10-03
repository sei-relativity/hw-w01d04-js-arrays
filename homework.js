let calculate = function(n){
    let sum = 0;
    for (let i = 0; i < n; i++){
        sum = sum + i;
    }
    console.log(sum);
}
calculate(6);
##############################

let calculate = function(n){
    let summationEven = 0;
    for(let i = 1; i<= n; i++){
        if(i%2 === 0){
            summationEven = summationEven +i;
			console.log(i);
        }
    }
    console.log(summationEven);
}

calculate(10);
##############################

let calculate = function(n){
	let sum = 0;
    for(let i=0; i<n.length; i++){
       sum = sum + n[i];
    }
    let avg = sum/(n.length);
    console.log(sum);
	console.log(avg);
}
calculate(20);
##############################


let world = function(){
    const str = 'caterpillar';
    const strReverse = str.split('').reverse().join('');
    console.log(strReverse);
    }
    world();

##############################

let combines = function(){
    world = ["test1","test2","test3"];
   console.log( world.join("-"));
}

combines();

###############################


let num = function(n){
    for (let i = 0; i <= n; i++){
        console.log(i);
        if( i == n){
            for(let m = n -1; m > 0; m--){
                console.log(m);
            }
        }
    }
    
    }

    num(5);

    ##############################

let arr1 = [];
let arr2 = [];
let look = function(arr1){
for(let i = 0; i < arr1.length; i++){
if(arr1[i].indexOf("a") != -1){
    arr2.push(arr1[i]);
}

}
console.log(arr2);
}
look(['cat', 'rabbit', 'dog', 'frog']);

####################################
