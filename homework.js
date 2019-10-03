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

