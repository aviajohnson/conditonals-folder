// CONDITIONALS -simply "if" statements, they always evaluate to their booleans representation...it is either true or false
if (true) {
    // do stuff
}

let foo = 'hello';
if (foo == 'hello') { //this is the same as asking if hello equals hello
    console.log('TRUE!!!');
    
}

/* 
= <-- assignment operator

these are all called comparison operators
== <-- equality operator 
=== <-- equality (strict)...it's equal AND of the same data type 1 and '1' are not the same data type! so 1==='1' returns false!
<
>
<= Less than or equal to
>= Greater than or equal to
!= Not equal
!== Not equal (strict)
*/

let bar = 2;
if (bar > 2) { //false
    console.log('TRUE!!!');
    
}

//if the expression inside the parenthesis evaluates to 'false' it will skip the console log, nothing is done! it won't do stuff

if (bar > 3) {      // if true do this, or else if false do this other thing, you only need IF-ELSE if you need the code to do something else...IF is enough sometimes
    console.log('TRUE!!!'); 
} else {
    console.log('FALSE!!!');
}


//this next one: else if
if (bar > 3) { //right now its 2, so it goes to the next function and not log 'YES' because it is NOT greater than 3
    console.log('YES');
} else if (bar > 1) {
    console.log('SURE IS');//it will log 'SURE IS' because this is true and will not go to the next funtion, you can do as many 'else if' that you want to test it    
} else {
    console.log('OOPS');//if the data fails all tests then it will log 'OOPS', in an 'ELSE IF' scenario, you do not have to have an else
}

//SWITCH uses strict comparison or triple equal
//bar = 2
switch (bar) {
    case 0:
        console.log('bar is 0');
        break;
    case 1:
        console.log('bar is 1');
        break;
    case '2'://when i wrapped the case in quotations, it went to default
        console.log('bar is 2');
        break;
    default://default is the equivalent of else
        console.log('OOPS');
        break;
}
// foo = 'hello, switches can set multiple cases for a single logic and it does no evaluations in the expressions
switch (foo) {
    case 'hello':
    case 'hola':
            console.log('foo','HERE');
        break;
    default:
        console.log('switch','OOPS');//leaving the default blank is the same as not having an else, logic is not needed here
        break;
}

console.log('a' > 'b'); //false, does alphabetical order also
console.log('a' < 'b'); //true
console.log('avia' > 'danny'); //false, if you do upper and lowercase, uppercase is not greater than lowercase, not sure why

// AND / OR
// && / ||
console.log(1 < 2 && 1 > 0); //this will log out true
console.log(1 < 2 && 1 > 3); //this logged out false, when you use and all expressions must evaluate to true in order for it to print true

console.log(1 < 2 || 1 > 3); //this statements logs true, when using || only one needs to be true
console.log(1 < 1 || 1 > 3); //this is false because both are false


//DECISION TREE
//Pet Finder
//--------------------
// |_1.Dog 2.Cat
//--------------------
//|
//--------------------
// |3.Snake 4.Fish



// TRUTHY and FALSEY
/*
Number 0 -> Falsey
The Boolean 'false' -> Falsey
Empty String '' -> Falsey
undefined -> Falsey
null -> Falsey
NaN -> Falsey
*/
let num = 0;
if (num) {
    console.log('here'); //this is not log anything because 0 is a Falsey!
}
if ('') {
    console.log('no here');//this will not log anything because an empty string is a Falsey!
}

let arr = [1,2,3]
let obj = {
    name: 'Avia'
}
if (arr[3]) {
    console.log('undefined');
} else {
}

// The ! not operator flips the boolean

// SOLVE FOR HOW MANY OF EACH DENOMINATION
var dataArray = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime'
];
// pennies = 102
// nickels = 53
let coinCount = {
    penny: 0,
    nickel: 0,
    dime: 0,
    quarter: 0
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}