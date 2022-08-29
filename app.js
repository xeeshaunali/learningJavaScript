// var fname = prompt("Please Enter Your Name","Mohammad");
// var lname = prompt("Please Enter Your Last Name");
// var age = prompt("Please Enter Your age");
// console.log(fname + " " + " " + lname + " " + age );


// var myNum   = 5
// var userNum = +prompt("Enter User Number");
// var dosraTarika = parseInt(prompt("Enter Number"))
// console.log(dosraTarika + userNum);

// // console.log(typeof userNum);



// MARKSHEET CODE


/* var eng   = +prompt("English Marks");
var math  = +prompt("Math Marks");
var bio   = +prompt("Bio Marks");

var obtainedMarks = eng + math + bio;
var totalMarks = 300;
var percentage = (obtainedMarks/totalMarks) * 100

if (    (eng <=100 && eng>=00)
     && (math <=100 && math >=00)
     && (bio <=100 && bio>=00) )
{

    if (percentage <=100 &&  percentage >=80){
        console.log("A1 Grade")
        console.log("English marks " + "= " + eng + "\n" + "Math marks " + "= " + math + " " + "\n" + "Bio marks " + "= " + bio)
    }
    else if (percentage <=79 &&  percentage >=60) {
        console.log("A Grade")
    }
    else if (percentage <=59 && percentage>=40){
        console.log("B Grade")
    }
    else if (percentage <=39 && percentage>=30){
        console.log("C Grade");
    }
    
    else if(percentage <30){
        console.log("You have failed Examination")
    }
    
    else if (percentage <=-1 && percentage>100){
        console.log("Wrong Marks entered")
    }
    else {
        console.log("Please enter all subject marks")
    }
    
}
else {
    console.log("Please Enter Proper marks between 00 and 100");
}

*/


// VALIDATING USER NAME AND PASSWORD

/*
var user = "admin";
var password = "password123";
var userAdmin = prompt("Please Enter User name");
var userPassword = prompt("Please Enter Password")

if (user === userAdmin && password === userPassword){
    console.log("Success")
}

else {
    console .log("Failed")
}
*/



// ARRAY PUSH POP SHIFT UNSHIFT SPLICE SLICE
/*
var collection = ["a", "b", "c", 1, 2, 3];
collection.push(4,5,6,7);
collection.pop()
console.log(collection);
*/

/*
var collection = ["a", "b", "c", 1, 2, 3];
collection.unshift("xee")
console.log(collection)
*/


// METHODS JS 
/* var collection = ["a", "b", "c", 1, 2, 3];
collection.push("Hello")
console.log(collection)
collection.pop();
console.log(collection)
collection.shift()
console.log(collection)
collection.unshift("a")
console.log(collection)
collection.splice(2,2,"Wolrd")
console.log(collection)
var arr = collection.slice(2,4)
console.log(arr)
*/

//TABLE FOR LOOP
/*
for (var i = 2; i <=10; i++){
    document.write(396 + "X" + i + "=" + i*396 + "<br>")
}
*/


//TABLE AFTER USER INPUT
/* var table = +prompt("Number", "Enter Table Reuquired");
var timesTable = +prompt("Number", "table count"
);


for(var i = 1; i <= timesTable; i++){
    document.write(table + "x" + i + "=" + table*i + "<br>")
}
*/

//SIMPLE CALCULATOR

/*
var x = +prompt("Please Enter number", "Number1")
var y = prompt("Please Enter Sign", "Sign")
var z = +prompt("Please Enter number", "Number2")

if(y === "+"){
    document.write(x+z)
}
else if(y === "-"){
    document.write(x-z)
}
else if(y === "*"){
    document.write(x*z)
}

else if(y === "/"){
    document.write(x/z)
}

else{
    document.write("Error wrong data feed")
}
*/


// COUNTRIES

/*
var arr = ["Pakistan","New-Zealad", "Australia","England", "India", "Srilanka", "Bangladesh"]


for(var i = 0; i<arr.length; i++){
    // document.write(arr[i] + "<br>")
    if(arr[i] === "Pakistan"){
        console.log(arr[i] + " is the winner")
        break
    }
    else if (arr[i] === "Indai") {
        console.log("India has lost")
    }

    else (
        console.log("Do not care")
    )

}
*/


// var num = [0,1,2,3,4,5,6,7,8,9]

// for(var i = 0; i<num.length; i++ ){
//     if(num[i] === 9){
//         console.log(num[i] + " Is the required number")        
//         break
//     }
//     else {
//         console.log("All Failed")
//     }
// }



//PRINT INDIA AND THEN BREAK
/*
var country = ["Pakistan", "India"]

for (var i = 0; i<country.length; i++){
    if(country[i] === "India"){       
        document.write(country[i] + "  To Harega ")
        break
    }
    
   
    
}

*/


// for(var i = 0; i <=10; i++){
//     document.write(i + "<br>")
// }


// var word = "xeeshaun";
// console.log(word.toUpperCase());
// console.log(word.toLowerCase())

// var x = "xeeshuan"
// var a = x.slice(0,1)
// var b = x.slice(1,8)
// console.log(a.toUpperCase() + b.toLocaleLowerCase())



// var user = prompt("Please enter Zaban")
// var arr = ["Saraiki", "Baloch", "Punjabi", "Urdu","Pushto"]

// first letter of city should be capital
// city name varified from give array
//Now create logic


// var userInput = user.slice(0,1)
// var userInput1 = user.slice(1)
// var userInput2 = a+b
// for (var i = 0; i < arr.length; i++ ){    
//     if(arr[i] === user && user.slice(0,1) === userInput.toUpperCase()){
//         document.write("Jee Bhai Mil gay")
//     }
//     else if (arr[i] === user && userInput.toLowerCase(0,1)){
//         document.write("Please use first letter as capital")
//     }
// }


// first letter of city should be capital
// city name varified from give array
//Now create logic



// var city = ["Hyderabad", "Karachi"];
// var user = prompt("Enter City with capital first letter", "Example: Multan");

// var a = user.slice(0,1);
// var b = user.slice(1);
// var c = a.toLocaleUpperCase() + b.toLowerCase();
// for(var i = 0; i < city.length; i++){
//     if(city[i] === c){
//         document.write("Mill Gaya")
//         break
//     } else {
//         document.write("Nahe Mila")        
//     }
// }

// HEAD AND TAILS
 /* var head  = prompt("Enter Your Name", "Selection Head")
var tails = prompt("Emter Your name", "Selection Tail")

var toss = Math.random()*2
var ksi = Math.floor(toss)

if(ksi == 0){
    console.log(head + " " + "Wins")
}
else {
    console.log(tails + " " + "Wins")
}
*/


// charAt() Method

/* var x = "Xeeshuan";
var y = x.charAt(0)
console.log(y)
*/

// 
/* var abc = "ayesha agai first position"
var x = abc.replace("ayesha", 'saad')

console.log(x)
*/


// NEW DATE Thu Aug 18 2022 10:48:58 GMT+0500 (Pakistan Standard Time)
/*
var rightNow = new Date();
console.log(rightNow)
document.write(rightNow) 
*/


/*
var a = new Date()
var b = a.getDay()
var c = a.getMonth()
var d = a.getDate()
var e = a.getFullYear()
var f = a.getTime()
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log (f)

*/


//DATE PRINT 
// convert new date variable into string


/* var rightNow = new Date();
var a = rightNow.getTime(); // SINCE 1 JANUARY 1970 SECONDS
console.log(a)
var rightNowslice = rightNow.toString();
console.log(rightNowslice)

var dayD = rightNowslice.slice(0,3)
console.log(dayD)

var monthM = rightNowslice.slice(4,7)
console.log(monthM)

var dateDt = rightNowslice.slice(8,10)
console.log(dateDt)

var yearYr = rightNowslice.slice(11,15)
console.log(yearYr)

var daymonthdateyear = (dayD + " " + monthM + " " + dateDt + " " + yearYr)

console.log(daymonthdateyear)
*/

// AGE CALCULATOR


/*

var dob = new Date("24 Aug, 1980");  
var miliSecondsDob = dob.getTime(dob);//CALCULATION 0F TIME FROM 1ST JAN 1970 TO  24 AUG 1980
console.log(miliSecondsDob);

var todayDate = new Date(); // SINCE 1ST JAN 1970 TILL TODAY 

var miliSecondsTillToday = todayDate.getTime();
console.log(miliSecondsTillToday);

var ageToday = miliSecondsTillToday - miliSecondsDob;

console.log(ageToday); //AGE TODAY

var diffAge = ageToday/ (1000*60*60*24*31*12)  
console.log(diffAge)//AGE IN YEARS 

var myAge = Math.floor(diffAge);
console.log(myAge) //USING FLOOR FUNCTION 

*/

// NESTED LOOP

/*
var arr = ["Mohammad", "Saad", "Ali"];
var secarr = ["Basit", "Usama"];

for(var i = 0; i <arr.length; i++ ){    
    for(var j = 0; j<secarr.length; j++){
        document.write(arr[i] + secarr[j] + "<br>")        
    }     
}

*/

 // i loop run 4 times
 // j loop runs 3 times
 // 4 * 3 = 12
 // hello will print 12 times

/* 
for (var i = 0; i <4; i++){ 
    for(var j = 0; j <3; j++){
        document.write("Hello" + "<br>")
    }
}
*/


// print 1 to 10 on  line one
// print 11 to 20 on  line two
/*
for(var i = 1; i < 100; i+)


for(var i = 1; i <100; i+=10){

    document.write(i + "<br>" )

    for (var j = i+1; j < i+10; j++){             
        
        document.write("j" + "<br>")
    }  
   
 }
*/

// FUNCTIONS TOPIC LEARNING
/*
function print(){
    document.write("Hello")
}
 
print()
*/

/*
function counting(){
    for (var i = 0; i <4; i++){
        document.write(i + "<br>")
    }
}

counting()

document.write("Hello function" + "<br>")
document.write("Hello function" + "<br>")
document.write("Hello function" + "<br>")
document.write("Hello function" + "<br>")

counting()

*/

// TABLE PRINT WITH MANUAL FUNCTION

/*
function twoTable(){
    for(var i = 1; i <=10; i++)
    {
        document.write("2" + "X" + i + "=" + 2*i + "<br>")
    }
}
twoTable()
*/

//MANUAL FUNCTION GREET
// abc is parameter
/*
function greet(abc){
    alert(abc)
}

greet("Hello") //hello is argument
*/

//CONDITON FUNCTION
/*
function add(a,b){ 
    document.write(a + b) 
}

add(100,100) 
*/

/*
function addd(a = 100, b = 100){
    alert(a + b)
}

addd()
*/
/*
function addd(a = 100, b = 100){
    alert(a + b)
}

addd(300, 700)
*/


//PROMPT WITH MANUAL FUNCTION
/*
function subs(a,b){
    document.write(a - b)
}

subs(+prompt("Enter Value 1"), +prompt("Enter Value 2"))
*/

//TASK 
// USE NESTED LOOP
//*
//**
//***
//***

/*
for(var i = 1; i <5; i++ ){
    
    for(var j = i; j < 7; j = i+j){        
        document.write("#")
    }
    document.write("<br>")
}
*/

//RETURN CONCEPT IN FUNCTION
/*
function add(a,b){
    return  a + b
}

alert(add(100, 100))
*/

//SECOND RETURN CONCEPT IN FUNCTION

/*
function add(a,b){
    return a + b
}

var x = add(2,2)
document.write(x)
document.write("<br>")
var y = add(2,2)
document.write(x)
document.write("__________"+ "<br>")
var diff = x -y;
document.write(diff)
*/

// var a = 10;
// function add(){
//     var b = "Xee"
//     return b
// }

// document.write(a)
// document.write(add())

//CODE PRACTICE IN PROGRESS 
// DATE FUNCTION

/* var rightNow = new Date()
var rightNow1 =rightNow.toString()
var dayD = rightNow1.slice(0,3)
var monthM = rightNow1.slice(4,7)
var dateDt = rightNow1.slice(8,10)
var yearY = rightNow1.slice(11,15)
console.log(dayD)
console.log(monthM)
console.log(dateDt)
console.log(yearY)
console.log(dayD + " " + monthM + " " + dateDt + " " + " " + yearY)
*/

// AGE CALCULATOR PRACT8ICE CODE

/*
var dob = new Date("24 Aug, 1980")
console.log("dob" + " " + dob)

var rightNow = new Date()
console.log("rightNow since 01-01-1970" + " " + rightNow)

var diff = ("diff in miliseconds" + " " + (rightNow-dob))

console.log(diff)

// diff = getFullYear(diff)
var ageInYears = 1325334564880/32140800000 //(1000*60*60*24*31*12)
console.log(ageInYears)
*/

/*
function greet(a,b){
    return a+b
}

console.log(greet(1,1))
*/

/*

for (var i = 1; i < 5; i++){
    for(var j = 1; j <=5; j++){
        document.write("#")
    }
    document.write("<br>")
}

*/

// WHILE, DO WHILE
//TABLE IN WHILE LOOP
/*
var a = 1;
while(a <= 10 ){ 
    document.write("2" + "X" + a + "=" + 2*a + "<br>")
    a++
}
*/

// DO WHILE LOOP
/*
var a = 1;
do {
    document.write(a)
    a++
}
while(a<=10)
*/
// IF CONDITION IS WRONG ONLY DO WILL WORK CONDITION WONT WORK
/*
var a = 20;
do {
    document.write(a)
    a++
}
while(a<=10)
*/


// onclick
//onmouseover
//onmouseleave
//onfocus
//onblur


// function foo(){
//     alert("Link Clicked !")
// }

// function abc(a){
//     alert(a)
// }

// function clickme(){
//     var a = document.getElementById('abc');
//     alert(a.value)
//     a.value = ''

// }

// WHILE LOOP PRACTICE

// var a = 0
// do {
//     document.write(a)
//     a++
// } 
// while (a < 5)
 



// value  ===> field

// function setvalue(){
//     var a = document.getElementById("xyz")
//     a.innerText = 'Xeeshaun Ali'
// }



// function foo(){
//     var a = document.getElementById("abc")    
//     a.innerHTML += "My Name is Xeeshaun Ali Narejo I am a Web and Graphics Designger Still Learning while at it! Nice to Meet you"    
// }


// CALCULATOR FUNCTIONS
/*

function calc(b){
    var a = document.getElementById('input')
    a.value += b
}

function result(){
    var b = document.getElementById('input')
    b.value = eval(b.value)
}

function clr(){
    var c = document.getElementById('input')
    c.value = ''
}
*/

// function show(){
//     var a = document.getElementById('para')
//     a.innerHTML = 'Hey my name is Xeeshaun Ali Narejo'

// }

function css(){
    var a = document.getElementById('css')
    a.className = 'big'
}