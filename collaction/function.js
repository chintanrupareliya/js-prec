console.log(3+"3");
//javascript datatype conversion confusion

//Number
let r="3";
console.log(r);
console.log(typeof r);
let c=Number(r);
console.log(c);
console.log(typeof c);
// "33" --> 33 number
//"33dfs" --> NaN Not a Number
// Null --> 0
//undifine --> undifine

//String

let a=null;
console.log(a);
console.log(typeof a);
let b=String(a);
console.log(b);
console.log(typeof b);
// "33"-->"33"
// 33-->"33"
//true -->"true";
//null(object)-->"null"(string)