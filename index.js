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

let name = ["Vivek", "Divya", "Pranav"];

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
for (let elem in name) {
  console.log(elem);
}

// FOR OF LOOP
// for of loop return the original element present in the array

for (h of name) {
  console.log(h);
}
// forEach loop
// forEach loop is very important loop in javascript.....until now we have seen that using for in loop we can get the index number of an array.......using for of loops we can get the element of an array.........but with the help of forEach loop we can get the element, index as well as the complete in a single loop.
name.forEach(function (elem, ind, arr) {
  console.log(`${elem} index is : ${ind} and the array is ${arr}`);
});

// SEARCHING AND FILTER METHOD IN ARRAY
// indexOf() method.....it basically return the index of the elemnt if it is oresnt in the arry else it will retur -1.

let naam = ["vivek", "pranav", "sarthak"];
console.log(naam.indexOf("vivek"));

// by default the searching starts drom 0 but we can also define that from where the searching should start.

console.log(naam.indexOf("sarthak", 1));

// 2nd Method of searching and filter in an array
// lastIndexOf() it is same as the indexOf() method but the basic difference is it start its iterations from the last index and move from backward to farword.

console.log(naam.lastIndexOf("sarthak"));
// i can also define from where to start searching.
console.log(naam.lastIndexOf("sarthak", 1)); //here it will result -1

// Third searching method i.e includes().....it basically returns true or false.if the value is present in the value it will return true if data is not present in the value it is false

console.log(naam.includes("vivek"));
// Just a random program to check the number of elemnts whose value is >300.
// const price = [200,300,350,400,500,700,880,524,980];
let cout = 0;
// for(let i = 1; i<price.length; i++){
//     if(price[i]>300){
//         console.log(price[i]);
//         cout++;
//     };
// };
// same question using for of loop
// for(elem of price){
//     if(elem>300){
//         console.log(elem);
//         cout++;
//     }
// }

// using forEach loop

// price.forEach(function(elem,index,arr){
//     if(elem>300){
//         console.log(`${elem} index is : ${index} and the array is : ${arr}`);
//         cout++;
//     }
// });
// console.log(cout);
// filter() method in javascript......it basically make a new array and when the condition is satisfied it will put that values in the new array

// it return an empty array if the contion is not satisfied

// const price = [200,300,350,400,500,700,880,524,980];
// const newprice = price.filter((elem,index)=>{
//     return elem>300;
// });
// console.log(newprice);

// sort() method is a method in array which is used to sort the array.
// by default it sort the array in acending order
// first it convert all the data into string and then sort it.

let arr = [33, 2, 344, 2, 22, , 443, 22, 498894];
console.log(arr.sort());

// Insert delete CRUD method in an array
// .push() method add the value at the last of array
let arry = ["vivek", "Lion", "lala"];
arry.push("pranav");
console.log(arry);

// .unshift() is same as .push() method but the basic difference is it add data to the firt position.
arry.unshift("Divya");
console.log(arry);

// pop() method is used to remove something from the array...it removes element from the last.
// it also changes the length of the array

arry.pop();
console.log(arry);

// shift() method is same as pop() method.... it is used to remove something form the starting of the array.

arry.shift();
console.log(arry);

// splice() method in array
// splice() method gives us the power to perform CRUD operation in a single go.

let mr = ["hi", "bye", "jye"];
// mr.splice(3,0,"tye_tye");
// console.log(mr);

// Splice() method that we will use in our genral coding
mr.splice(1, 1, "hu_hu");
console.log(mr);
let month = ["feb", "march", "april"];
let newmonth = month.indexOf("april");
if (newmonth != -1) {
  month.splice(newmonth, 1, "April");
  console.log(month);
} else {
  console.log("No data found");
}

// forEach loop to sort the array
let mri = [
  1, 2, 4, 7, 99, 7, 4, 35, 342, 2, 33, 42, 4, 424, 55, 64, 64, 7, 75, 75,
];
console.log(mri);
let count = 0;
mri.forEach(function (elem, index, array) {
  if (elem > 9) {
    console.log(
      `the number is ${elem} whose index is ${index} and arrai is ${array}`
    );
    count++;
  }
});
console.log(`total numbers who are greater tha 9 is : ${count}`);

// map() method in javascript
// map() method returns a new array on the basis of operations we did on it
let vi = [1, 3, 4, 5, 6, 677, 88999, 786765, 4];
let mount = 0;
let newvi = vi.map((elem) => {
  console.log(elem > 4);
  mount++;
});
console.log(`value of mount is ${mount}`);
console.log(newvi);

// so here it will return false where the condition is not satisfied and true where the conditions is satisfied.

// we can also excess each and every element but it will return in a form of array

let newviv = vi.map((elem, index, array) => {
  console.log(`the index of ${elem} is ${index} it belond to ${array}`);
});
console.log(newviv);

// Challenge question : - Find the sqaure root of every number in an array
let ch1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newch1 = ch1.map((elem,index,array)=>{
//     return `the square of ${elem} will be ${elem*elem} whose index is ${index} and it belong to ${array}`;
// });
// console.log(newch1);
// Challenge question : - Find the sqaure root of every number in an array using chaining in map() method

let newch11 = ch1
  .map((elem) => {
    return (elem = elem * 2);
  })
  .filter((elem) => {
    return elem > 10;
  });
console.log(newch11);

// i can write the above code in one line as well
// here arrow function is returning only one line thats why we don,t need any return ketword.
let newch112 = ch1
  .map((elem) => {
    elem = elem * 2;
  })
  .filter((elem) => {
    elem > 10;
  });
console.log(newch112);

// This is a very important concept which states that we can use multilpe methods in map() method it will make our task eay

// Challenge question 2 : - Multiply each element by 2 and return only that value who is greater than 10
let sount = 0;
let newch2 = ch1.map((elem) => {
  elem = elem * 2;
  if (elem > 10) {
    console.log(`the elements are ${elem}`);
    sount++;
  }
});
console.log(newch2);
console.log(sount);

// Reduce() method is very useful method because it allow us to get a single value
//until now we were not capable to get results in one line but after reduce() method we are able to fetch the results in one line.

// accumulator in the reduce() method is very important because it accyumulates all the data in a single varriable through which we can do multiple things like add, subyract, multipluy, didvide, average etc.

let re = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 7];
let newre = re.reduce((accumulator, elem, index, array) => {
  return (accumulator = accumulator + elem);
});
console.log(newre);

// chanining

let newre2 = re
  .map((elem) => {
    return (elem = elem * 2);
  })
  .filter((elem) => {
    return elem > 10;
  })
  .reduce((accumulator, elem, index, array) => {
    return (accumulator = accumulator + elem);
  }, 6);

console.log(newre2);

// Reduce() method in one line

let newre3 = re
  .map((elem) => (elem = elem * 2))
  .filter((elem) => elem > 10)
  .reduce(
    (accumulator, elem, index, array) => (accumulator = accumulator + elem)
  );
console.log(newre3);

// using inilitizing value in reduce()
let newre21 = re
  .map((elem) => {
    return (elem = elem * 2);
  })
  .filter((elem) => {
    return elem > 10;
  })
  .reduce((accumulator, elem, index, array) => {
    return (accumulator = accumulator + elem);
  }, 9);

console.log(newre21);

let flatarr = [
  ["1", "2", 3],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

let newFlatarr = flatarr.reduce((accum, elem) => {
  return accum.concat(elem);
});
console.log(newFlatarr);

// Strings in javascript
// strings are basically used to add aur manipulate text
// string can be written in single quote aur double quote

let hu = "hello world";
let hui = "Hello there";
console.log(hu);
console.log(hui);

// using .length property we can check the length of string object

console.log(hu.length);

// Escape characters
// we can use escape characters to print that value which will generally give error

let sentence = 'hi there i am "vivek kuamr"';
console.log(sentence);

// we can also use alternate questes in order to escape from this situation

let sen = 'hi there i am "vivek kumar" ';
console.log(sen);

// How to find string in a string
let myd = "Hello there my there name is vivek kumar";
console.log(myd.indexOf("vivek")); //23

// I can also decide that from where the searching should start
console.log(myd.indexOf("there", 7));

// lastIndexof() it basically start checking from the backword side of the string

console.log(myd.lastIndexOf("vivek"));

// searching in string
// we use search() method for searching
// it will give the first occurance of the object and -1 if data not found
// we can not specify in this unlike indexOf() method from where to start searching.
console.log(myd.search("name"));

// Extracting string parts in javascript
// slice() method
// it is same as splice() method in an array
//it take 2 parameteres starting point and ending point
// starting point is included but the ending ponit is not included

let str = "Mango,Apple,Grapes";
let newstr = str.slice(0, 4);
console.log(newstr); //Mang
// our output is man but it should have mango...whay that didnt happen because splice() method doesnt include last condition.

let newstr2 = str.slice(7, -2);
// it will remove the last two element and show result between 7 and last
let newstr3 = str.slice(7);
// it will show result till last starting from 7
console.log(newstr2);
console.log(newstr3);

// an example to how to show only limited text

let tweet =
  " HI there i am vivek kumar this is just an example to how to show only limited text";
console.log(tweet.slice(0, 10));

// Second method for is substring() method
// it is same as slice() method but it does not take negative numbers as argument
// if i give a negative number in argument then it will start printing number form 0 until the given number excluding the last number

let substr = "Apple, grapes, mango";
console.log(substr.substring(10));
// print from 10 to last
console.log(substr.substring(8, -2));
// print from 0 to 8 but exclude the 8th position value
console.log(substr.substring(7, 9));
// print from 7 to 9

// Third method
// substr() method it is similar to slice() method but the basic differnce is that it takes length as second input

console.log(substr.substr(0, 5)); // Apple because it starts from 0 and print upto 5 excluding the value of 5.

//  if i want to print last 4 characters only
console.log(substr.substr(-4));

// replacing string content
// replace()  method is a method which replace a specfic data from another specific data

// it is case sensative
// by default the it will only change the data which will be first

let mname = " hi there my name is vivek kumar";
console.log(mname.replace("kumar", "singh"));
// console.log(mname.replace("","hi"));

// Character exactracting methods
// charAt() method
// this method basically returns the character at the specific index number
let hih = "vivek kumar";
console.log(hih.charAt(0)); // v

// charCodeAt() is very important method
// it returns the character code of that perticular character
console.log(hih.charCodeAt(0)); //118
// 118 is the character code of v in utf16

// bonus question : - return the character code of last character
let hy = "vivek kumar";
console.log(hy.charCodeAt(hy.length - 1));

// property excess method in javascript
// this was an update in ES5 (2009) this was very useful upadate
//it give us the power to excess the data like we did in an array

let ji = "vivek kumar";
console.log(ji[0]); // v

// [] we have seen that this [ ] are used in array but we can also use this to acess the characters of strings.

// some other useful methods in strings
//.toUpperCase() method basically converts all the text to uppercase.
console.log(ji.toUpperCase());
//.toUpperCase() method basically converts all the text to uppercase.
console.log(ji.toLowerCase());

// trim() method this method is very useful this method is used to remove the extra spaces from the starting and ending position.
let tr = "             hi there         ";
console.log(tr);
console.log(tr.trim());

// converting string into array
let arstr = "a,b,c,f";
let newarstr = arstr.split(","); // on the basis of comma
let newarstr2 = arstr.split(" "); // on the basis of space
let newarstr3 = arstr.split("|"); // on the basis of or
newarstr.push("v");
console.log(newarstr);
console.log(newarstr2);
console.log(newarstr3);

// how to convert an arry into string
// we use toString() method to convert an array into string.
let starr = [1, 2, 3, 4, 4];
console.log(starr.toString());

// Date object
// date object gives us the date and time
//GTM+530 means india is 5 hour 30 mintues ahead of GMT Geehimik time
let d = new Date();
console.log(d);
console.log(d.toLocaleString());
console.log(d.toString());

// if i need any specific date
// remember one thing the counting starts fro 0 in javascript.
// thats why 3 = April here.

let v = new Date(2022, 3, 4, 13, 15, 0, 0);
console.log(v.toLocaleString());

// If we do Date() only then the output will be completely correct
// but if i wirte Date(2011) i will get a wrong output

let c = new Date(2010); // jan 1 1970 00:00
let b = new Date(2010, 6); // 6th may 2010
console.log(b.toLocaleString());

// remenber one thing that if we are giveing any argument in Date() then minimum we shoud give 2 argument.
// months argument is most necessary argument because if we not specify the month it will print 1 jan 1970.

// Date.now() is method which returns the total number of milisecond spend from 1jan 1970

console.log(Date.now());
let a = new Date(1654800988294);

// so basically we can put the milisecond inside the parameter of Date() and it will return the exact date corresonding to that milisecond.
console.log(a.toLocaleString());

// Methods to get inidividul values of Date();
let ac = new Date();
// to get exact date with all the information.
console.log(ac.toLocaleString());
// to get full year
console.log(ac.getFullYear());
// to get the month only
console.log(ac.getMonth());
//yto get the day only
console.log(ac.getDay());

// until now we have seen how to get Date() properties now we wll see how to seet properties in Date()
let da = new Date();
console.log(da.setFullYear(2022));
console.log(da.setMonth(3));
console.log(da.setDate(12));
// now we well get all the results in miloisecond format.
// we can simply write as consloe.log(Date("milisecond value").toLocaleString());
console.log(da.toLocaleString());

// Time properties
// how to get time

let at = new Date();

console.log(at.getTime());
console.log(at.getHours());
console.log(at.getSeconds());
console.log(at.getMinutes());

let bt = new Date();
console.log(bt.toLocaleString());

// if i want separate date only
console.log(at.toLocaleDateString());
// if i want time only.
console.log(at.toLocaleTimeString());

// Math object
// return the value of PI
console.log(Math.PI);
// round off the number in normal convention
console.log(Math.round(44.9));

// always round off the value to upper limit/integer
console.log(Math.ceil(67.4));

//find the square root of number
console.log(Math.sqrt(66));

// returns the absplute value always convert the negative value to positive
console.log(Math.abs(-99));

// use to know the power of any number
console.log(Math.pow(2, 3));

// it chop off the number before decimal and it always return a postive number
console.log(Math.floor(99.883));

// it also chop off the number before decimal but it didnt convert negative number ito posyive unlike math.floor()
console.log(Math.trunc(-99.77));

// it generates random number between 0 and 1 1 is excluded
console.log(Math.random());

// generate number between 1 to 10.
console.log(Math.floor(Math.random() * 11));

// Window object in javascript
// Everything that we see in the browser is window object
// document is the child of window object
// we can say that everyting that belong to document it also belong to window object but everything that belong to window object it is not necessary that it should also belong to document.

// Window.location is used to find all the details of current web page
// console.log(window.location);

// window.location.href is used to find the current url
// console.log(window.location.href);

// even if we dont write window keyword in bith the codes then also it will give us same results.
// console.log(location.href);
// console.log(location.href);

// BOM stands for browser object model it deals with browser objects like location, history, navigtion, screen

// properties of window global obeject

// basically it returns the inner height and inner width of the window
// if we cahnge the height and width then also it will tell the correct values.

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// DOM stants for document object model
// it basically creates a dom tree
// the root element of the dom is <html>

// it returns the root element
// console.log(document.documentElement);

// to know about number of child nodes
// white spaces and tabs are also included in this
// they come under the category of text
// console.log(document.childNodes);

//if i want to know the exact elements then
// document.children;//

// hasChildNodes() is method which return true and false value it basically tells us that wether a element have child nodes or not
// hasChildNodes();

// if i want to excess the first child of the body

// this will return me the first child in the body....and here it will be text why..??
// because as soon as we enter in the body we tend to type or press enter that creates a space and childNode property counts that also in the form of text

// document.body.firstChild;

// what if i want the actuyal first elememt
// it will return me the actual first element child
// document.body.firstElementChild;
// i can also excess the sibling by doing this
// document.body.firstElementChild.firstElementChild;

// this was the complicated method to excess the sibling i can directly access the siblings

// again it is goin to return the text same as we saw in nextChild and nextElementChild

// document.head.nextSibling;

// if i want to get exact next sibling

// document.head.nextElementSibling;

// if i want to get  previous sibling

// document.head.previousSibling;
// if i want to get exact previous sibling

// document.head.previousElementSibling;

// How to search elements in DOM
// how to select elemt by id
// document.getElementById("");

// How to select elemnt by class name
// document.getElementsByClassName("");

// how to select elemnt by tag name
// document.getElementsByTagName("");

// how to select element by name

// document.getElementsName("");

// what is query selector ...??
// query selector basically gives us the power to select any type of element
// in its () i can write any element and it will give me its first occuranece.
// document.querySelector();

// we can also use querSelectorAll() that will give me the list of all the elements mentioned in the ().

// document.querySelectorAll();

//  Events and how to add events in javascript

function callfun() {
  alert(
    "hi there its using the conventional funtion which is used by most of the people"
  );
}
// but we have a problem with this type of event calling...
// the problem is we try to call an event by same name then it overrites a call.

let btn2 = document.getElementById("2");
btn2.onclick = () => {
  alert("Hi we are dealing with the problem");
};

// it will ignore the first call beacuse the first call is overwritten by the second call.

btn2.onclick = () => {
  alert("Hi we are dealing with the problem again");
};

// Now the most usefull and correct way of calling an event is using event listner
// Because it allow us to write multiple events on a single varriable.
// it does not overrite anything.

let btn3 = document.getElementById("3");
btn3.addEventListener("click", () => {
  alert(" This is the most effective way of writing an event.");
});

btn3.addEventListener("click", function () {
  alert(
    "Because it does not ignore any code nor it overwrite any thong it just go with the flow"
  );
});

// what is Event object
// the parent of all the events is called as Event object.
// some examples of events click, blur, focus.

// it is basically a way of checking that what are the events that have been fired.
// it also tells us that where the event has been fired.
const checkfun = () => {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
};
btn3.addEventListener("click", checkfun);

// MouseEvent objects
// all the things or actions which are related to mouse comes under the category of mouseEvnet object
// simply i can say that those events which are happening due to interaction of mouse in the html comes under mouseEvents.

let para = document.getElementById("p");
// para.addEventListener('onmousedown',mouseDown);
// para.addEventListener('onmouseup',mouseUp);

// when we wll click on the paragraph it will change its color to red.
function mouseDown() {
  para.style.color = "red";
}
// as soon as i will free the poniter of mouse it will change to green.
function mouseUp() {
  para.style.color = "green";
}

// ommouseenter event
// basically this evet is fired when we the mouse enter in a defined are

let btn1 = document.getElementById("6");
function mouseEnter() {
  btn1.style.backgroundColor = "red";
  btn1.style.color = "yellow";
  console.log("MOUSE ENTER ");
}
// onmoueleave
// this is also a mouse event which is fired whne the mouse leave a certain area
function mouseLeave() {
  btn1.style.backgroundColor = "yellow";
  btn1.style.color = "red";
  console.log("MOUSE LEAVE ");
}

// keyboard events
// keyboard events basocally starts when we press some keys on the keyboard
// keypress event

let inp = document.getElementById("inp");
let p = document.getElementById("p");
function keyPress() {
  p.innerHTML = ` YOU HAVE PRESSED THE ${event.key}. `;
}

// keydown event
function keyPress() {
  p.innerHTML = ` YOU HAVE PRESSED THE ${event.key}. `;
}

function keyDown() {
  p1.innerHTML = `The key is pressed.`;
}

// keyup event
function keyUp() {
  p1.innerHTML = `The key is leaved.`;
}

// onchange event
// this event will be triggred when we change something.
const change = () => {
  let inp = document.getElementById("inp").value;
  let icecream = document.getElementById("icecream").value;
  console.log(`${inp} selects ${icecream}`);
};

//timig based events
// there are mainly to main events
// setTimeout()
//setTimeinterval().

// setTime() basically tells us that after how many miliseconds it will be executed.

let btn = document.getElementById("btn");
let myName = document.getElementById("myName");
const callname = () => {
  myName.innerHTML = "Hi my name is Vivek kumar";
};
btn.addEventListener("click", () => {
  myName.innerHTML = "Loading....";
  setTimeout(callname, 1000);
});

// ClearTimeout() is used to stop the setTimeout().

//setTimeInterval() basically tells us that after which certain time we need to call the function again and again

let star = document.getElementById("start");
function startTime() {
  setInterval(() => {
    tm.innerHTML = count;
    count++;
  }, 1000);
}
star.addEventListener("click", startTime());

// clearInterval()

// clearInterval() is used to stop the timeInterval()

// let star = document.getElementById("start");
let stopp = document.getElementById("stopp");

stopp.addEventListener("click", function () {
  clearInterval(inter);
});

// Object oriented programmimg in javascript

// what is object literals ...?
// object literals are basically a data structure which stores the value in the form of kye and it value.
// we can store any type of data inside this.

// How can we define an object.

// objects are always defined inside curly braces.
// we can access its values using .method

let obj = {
  fname: "vivek",
  lname: "kumar",
  call: function () {
    console.log(`my name is ${obj.fname}`);
  },
};

// after ECMA script 2015 we dont need to write funtion keyword to define a funtio in an object.

let objj = {
  fname: "vivek",
  lname: "kumar",
  call() {
    console.log(`my name is ${obj.fname}`);
  },
};

// we can even add object as a value inside an object

let cbj = {
  fullname: {
    fname: "Vivek",
    lanme: "kumar",
    call() {
      console.log(`my name is ${cbj.fullname.fname} ${cbj.fullname.lanme}`);
    },
  },
};

// calling the function.

cbj.fullname.call();

// this object ...??
// this object basically holds the value of current context.
// the value of this object will chnange with respect to its location.

console.log(this);

// so here it is referring to the window object.
// if i do somthing like this...
console.log(this.alert("Hi there it is using the this object !"));

// so here the "this" keyword have the power to access the properties of window object

// what is the context of this here ...??
function call() {
  console.log(this);
}

// here also this belongs to window object

// what will be the output and why..??

let hi = "vivek";
function callu() {
  console.log(this.hi);
}

callu();

// the output of the code will Vivek...why??
// beacause hi is defined in the global scope...
// and the context of this is window object....

// and all the varriables which are defined in the global scope belongs to the window object.

// until now we have seen that the context of this is always a window object.
// but whne we use it inside an object its context chnages to that object.

let oo = {
  fanme: "krishna",
  call() {
    console.log(this.fanme);
  },
};
oo.call();

// we can not use this keyword in inside fat arrow function

let onb = {
  rol: 59,
  cl: () => {
    console.log(this);
  },
};
onb.cl();

// again the context of this will chnage to the window object here.
// we may say that it is one of the demerit of fat arrow funtion

// destructuring in ES6
// the destructure assinment is the syntax of javascript which allow us to unpack the values of arrays as well as the objects.

let abc = ["vivek", "kumar", 59];
let f = abc[0];
let b1 = abc[1];
let b2 = abc[2];

console.log(b2);

// so here i destructured the values of an array using the traditional method of usimg the index numbers

// modern way of destructuring the array

let [pnaamm, lsnaam, aage] = abc;

// so here i can excess each ande very data very easily
// but we need to remenbe that it is very position specific
// what ever varriable is defined first will be assingend the index number first.

// we can even add values to it.

let [pnaam, lnaam, age, degree = "B.tech"] = abc;
console.log(degree);

// if i want i can even skip the values as well

let nu = [1, 2, 3, 4, 5, 6, 7, 8];
let nu1 = [a, b, , , , , c];
console.log(a, b, c); // a = 1, b = 2, c = 7

// object destructuring
// object destructuring is same as the array destructuring but here we use {} insted of [].

let ob4 = {
  fname: "vivek",
  age: 59,
};
let { fnamee, agee } = ob4;

console.log(fanme, agee);

// properties of an object

// we can get the dynamic values

let hiui = "vivek";
let on1 = {
  [hiui]: "hello ji kaise ho saare",
};
console.log(on1);

// we dont need to write the name and key if they are same

let name1 = "vivek";
let age3 = 24;

// traditional way
let bh = {
  name1: name1,
  age3: age3,
};

console.log(bh); //{name1 : "vivek", age3 : 24}

// after ECAM 2015
let bh1 = { name1, age3 };
console.log(bh1); //{name1 : "vivek", age3 : 24}

// spread operator in javascrit
// spread operator is used to use the value of already existing array so that we would not reapet the step to inilized it again and assign the value.

let q = [1, 2, 3, 4];
let p1 = [8, 9];

const pp1 = [...q, 8, 9];
console.log(p1);

// i can also do this

const att = [...q, ...p1];
console.log(att);

// it will have both the values

// flat() method is used to flat the array
// until now we have this this using the reduce() method in which we have donw this by using accumulator and concat method.
// but now we can diretly do that.

let y = [
  [1, 2, 3, [0, 9, 8]],
  [4, 5, 6],
  [9, 09, 8, [2, 3, 4]],
];

console.log(y.flat());

// it also have same problem like reduce that it will flat up to one level only but we can pass parameter in this in order to flat the array.
console.log(y.flat(7));

// it will now flat up to 7 level
// i can write infinity so that it will flat all the values.

// use strict
// use strict basically allow us to wirte effective code we can not write ugly code.

// Event propagation.
// event propagation basicalyy tells us the behaviour of the event.
// There are basically two types of event propagation
// 1. Event bubbling(buttom to top).
//2. Event capturing(top to buttom).

// defining events

let parentt = document.getElementById("parentt");
let childd = document.getElementById("childd");

let callChild = () => {
  alert("CHILD IS CLICKED !!");
  console.log("child div clicked.");
};

let callParent = () => {
  alert("Parent div is clicked !!!");
  console.log("parent div here !!");
  event.stopPropagation();
};

// this is the by defaut behaviour of event propagation i.e event bubblng.
// it will go from innermost element to outer most element(buttom to top).
// if we did not write false in the event listener() then also it is fine.
childd.addEventListener("click", callChild(), false);
parentt.addEventListener("click", callParent(), false);

// in event capturing the event propagation moves from top to bottum
// which means it will be first consider the outermost element then it willmove toward the innermost element.
// we have to simple write "true" in the paranthesis of eventlistener()

childd.addEventListener("click", callChild(), true);
parentt.addEventListener("click", callParent(), true);

// call back funtion is that type of function which basically take a function as an argument

// traditional way of making a calculator.
// we need to console.log() time and again
let sum = (num1, num2) => {
  return Math.abs(num1 + num2);
};

let sub = (num1, num2) => {
  return Math.abs(num1 - num2);
};

let mul = (num1, num2) => {
  return Math.abs(num1 * num2);
};

console.log(mul(6, 8));

// this is how call back function works.
// sum() is called as an argument inside the calculator() function
const calculat = (num1, num2, operat) => {
  return operat(num1, num2);
};

console.log(calculat(4, 5, sum));

// Event loop in javascript.
// Event loop basically comesunder the topic of advance javascript.
// whenever we call a function or statement a global execution context is created..

// global execution context is basically that space where the progaram is being executed.

// once the programm is being executed then then the code is remobved from the global execution context.

// ex:-

// function 2 is created in which we have used setTimeout() function to understant event loop

const fun2 = ()=>{
  setTimeout(()=>{
    console.log(" i am inside the function 2nd ");
  },3000);
};

// inside fun1() we have called the fun2() in order to understant event loop better.

let fun1 = ()=>{
  console.log("hi there its function 1");
  fun2();
  console.log("hi there its again function 1 ");
};

fun1();

// now when fun1() will be called it will create a space for fun1() in the global execution context.

// as soon as it enters the fun1() it will find the console.log() statement...
// so it will create a space for that console.log() statement in the global execution context.

// and when the console.log() statement will be executed it will be removed from the global execution context.

// after that it will come to second statement inside the fun1() and here it will find that we have called fun2().

// and it will be moved to fun2() and it will create a sapce for the fun2() in the global execution context.

// but as soon as it enters in the fun2() it will find that there is callback function i.e a seTimeout() function which shold be on hold for 3 secs.

// so it will move the fun2() to WEB APIS section from the global execution section.

// what is WEB APIS section...?

// so when a progarm is enterd in the global exectuion context it shold be exectude immediately if it is creating any blocakage to further any program then it is send to the web apis secton and removed m=from the global execution context.

// so when fun2() is sent to the web api section....it will again come in the fun1() section to check wether everything is finished or still something is left.

// then it will find another consolo.log() statement over there.... and it will create a space for that console.log() statement in the global exectution context and it will be exectuded immediately.

// now fun1() will be removed from the global execution context.

// as soon as 3 seconds will be over the fun2() code will be sent to the message que.

// what is message que...??

// a message que is a line where the statement are gathered in a que in order to get space in the global execution context.


// here event loop basically comes in the action..
// event loop basically decides when to send data from message que to global execution context.


// function currying

// function currying basically says that the insted of giving multiple arguments to a single funtion we should give one argument aand return a new function that will take another argument and again return a function that will take the third argument and so forth.

function sum12(num1){
  return function(num2){
    return function(num3){
      console.log(num1+num2+num3);
    }
  }
};
sum12(2)(5)(9);

// infact we can writ the above code in one line as well.

const sum123 = (num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);

// it is the most optimisd code .  

// how to make xmlhttsRequest


let bt2n = document.getElementById("btn");
bt2n.addEventListener("click", callBtn);
let con = document.querySelector(".con");

function callBtn() {

    let fakeUrl = new XMLHttpRequest();
    let urll = "https://jsonplaceholder.typicode.com/users"

    fakeUrl.open("GET", urll);
    fakeUrl.onload = function () {
        if (this.status === 200) {
            // console.log(JSON.parse(this.responseText));
            con.innerHTML = JSON.parse(this.responseText);
        }
    }


    fakeUrl.send();

}


 
