//singloton
//object is a collaction of key value pair
//object literals
//how to declare the symbol in object
let mysym=Symbol("hello");
console.log(typeof mysym);
const user={
  name:"sahil",
    age:20,
    //the decleration of symbol in object
    [mysym]:"this is my symbol",
    "college name":"sage university",
    email:"exampal@google.com",
    location:"indore",
    blogs:["how to learn programing","how to learn web development"],
}
console.log(user.age);
//this syntext is for element key that declare in object as a string.
//hear in exampal the collage name is not Accessible by dot notation
console.log(user["college name"]);
console.log(user[mysym]);
user.age=21;
console.log(user.age);
//this is the way to add the new key value pair in object
// Object.freeze(user);
//this is the way to freeze the object that means we can not change the value of object
user.age=22;
console.log(user);
// add function in object
user.login=function(){
  console.log(`you are login ${this.name}`);
}
user.logout=function(){
    console.log("you are logout");
}
user.login()
 