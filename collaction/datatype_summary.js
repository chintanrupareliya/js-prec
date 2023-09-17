//primetive data type
// 1. Number    
// 2. String
// 3. Boolean
// 4. Null
// 5. Undifined
// 6. Symbol
// 7. BigInt
//javascript is a dynamic type language
// let a=3;
// console.log(a);
// console.log(typeof a);

//non primetive data type or reference data type

// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Error
// 7. Math

//javascript momory allocation
// 1. stack memory(primitive data type)
// 2. heap memory(non primetive data type)
  let num1=3;
  let num2=num1;
  num2=5;
  console.log(num1);
  console.log(num2);

  let userone={
        name:"sakib",
        age:35,
  }
  let usertwo=userone;
    usertwo.name="tamim";
    console.log(userone.name);
    console.log(usertwo.name);
//hear output is tamim tamim because both variable are pointing to same memory location it is called shallow copy
