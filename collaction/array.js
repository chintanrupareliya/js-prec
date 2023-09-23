// array
//array declaration

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// console.log(typeof arr); //object

// //deep copy
// //method of array
// arr.push(11);
// console.log(arr);
// arr.pop();
// console.log(arr);

// //unshift and shift
// arr.unshift(9);
// console.log(arr);
// arr.shift();
// console.log(arr);

// //join method
// let arr1 = arr.join("-");
// console.log(arr1);
// console.log(typeof arr1);

//splice method
//splice(start,deletecount,items)

// let arr = ["hello", "world", "how", "are", "you"];
// let newarr = ["i", "am", "fine"];
// arr.push(newarr);
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.concat(newarr));
// console.log(arr);

// //concate using spread operator
// let arr1 = [...arr, ...newarr];
// console.log(arr1);
// console.log(arr);

const another_array = [1, 2, 3, [2, 4, 5, 7], 4, 5, 6, 7, 8, 9, [(1, [2, 3])]];
const real_anothe_array = another_array.flat(Infinity);
console.log(real_anothe_array);
console.log(Array.from("chintan"));
console.log(Array.isArray(another_array));
//of method
console.log(Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9));
