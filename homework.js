// #1

const summ = function (n) {
	let vr = 0;
  for (let i=0; i <= n.length; i++) {
	  vr += i; 
}
return vr 
};

// #2
const summ = function (n) {
	let vr = 0;
  for (let i=0; i < n.length; i++) {
    if (n[i] % 2 === 0){
      vr += i;   
    } 
}
return vr 
};

// #3

const summ = function (n) {
	let vr = 0;
  let div = 0;
  for (let i=0; i <= n.length; i++) {
    vr += i;
    
    div += vr /n.length
}
return div 
};


//#4

const rev = function(v) {
  v = v.reverse()
return v
}