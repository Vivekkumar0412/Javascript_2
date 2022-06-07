// console.log("Hi there");
// ECMA Script 2015
// ECMA Script or ES6 was a very important update in the history of javascript beacuse
// it includes many features which were missing form the javascript.......after adding these features in javascript ,javascript become far more popular and useful. 

// scope of var is functional
// var name = "vivek";
// console.log(name);
// name = "kumar";
// console.log(name);
// so in the above code i can clearly see that value can be easily updated when we use var
// let fname = "vivek";
// console.log(fname);
// fname = "kumar";
// console.log(fname);
// so in the above code i can clearly see that value can be easily updated when we use let also

// const funame = "vivek";
// console.log(funame);
// funame = "kumar";
// console.log(funame);
// this time it will give an error because once we defined a value using const then we can not update it....its a fix value

// function intro(){
//     var fname = "Divya";
//     if(true){
//         var lname = "Singh"
//         console.log("inner" + fname + lname);
//     };
//     console.log("inner_outer" + fname + lname);;
// };
// intro();

// so here we saw that when we use var we were able to acess the values everywhere

// function intro(){
//     let fname = "Divya";
//     if(true){
//         let lname = "Singh"
//         console.log("inner" + fname + lname);
//     };
//     console.log("inner_outer" + fname + lname);;
// };
// intro();

// when we use let keyword we were not able to excess the lnme outside the if block because the lname was defined inside the if block...........and let scope is block


// string tamplet literals was alss added in the update of ES6 nd it is one of the most important update

// when string tamplet litrels was not availabe it was very lengthy to consanate two strings and insert values inside it 

// function table(a){
//     for(let i = 1; i<=10; i++){
//         console.log(`${a} X ${i} = ${a*i}`);
//     };
// };
// table(5);

// By default parameter : - these are the parameters which are given to avoid unexpected results.

// function mult(a,b){
//     return a*b;
// };
// console.log(mult(2));

// the output of the above code will be Nan


// function mult(a,b=4){
//     return a*b;
// };
// console.log(mult(2));

// but here output is 8 because the default value of b is 4.


// Fat Arrow functions was also added during the update of ES6

// normal function will not give error if it is called first then inilitazed
// console.log(sumi());
// function sumi(){
//     let a = 3;
//     let b = 7;
//     return `total sum is ${a+b}`; 
// }

// but fat arrow function will give error if the function is called first and then inilized
// const sum = () =>{
//     let a = 3;
//     let b = 7;
//     return `total sum is ${a+b}`;
// };
// console.log(sum());

// Arrays in javascript 
//  Arrays gives us the power to store multiple data a single point
// in javascrpt we can store any type of value in array unlike other programming languages we can only store a single type of data in an array

// Inilitizing of an array

let name = ["Vivek","Divya","Pranav"];

// Traversal of an array
// excessing a single element
console.log(name[0]);
// Excessing the last element of an array
console.log(name[name.length - 1]);

// .length is a property of an array that gives the length of an array, the value of length starts from 1


// exatrating all the values of array using for loop
// let num = [1,2,3,4,5,6,6,77,8788];
// for(let i = 0; i<num.length; i++){
//     console.log(num[i]);
// };

// FOR IN LOOP
// for in loop basically return the index numbes of the elements present in an array 
for(let elem in name){
    console.log(elem)
};

// FOR OF LOOP
// for of loop return the original element present in the array

for(h of name){
    console.log(h);
};