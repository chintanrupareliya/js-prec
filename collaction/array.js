// array
//array declaration

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
console.log(typeof arr); //object

//deep copy
//method of array
arr.push(11);
console.log(arr);
arr.pop();
console.log(arr);

//unshift and shift
arr.unshift(9);
console.log(arr);
arr.shift();
console.log(arr);

//join method
let arr1 = arr.join("-");
console.log(arr1);
console.log(typeof arr1);

//splice method
//splice(start,deletecount,items)
