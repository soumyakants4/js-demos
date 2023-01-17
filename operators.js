

//Operators in JavaScript


//Arithmetic Operators
var a = 100;
var b = 30;

console.log(`the values of a+b is`, a + b);
console.log(`the values of a-b is`, a - b);
console.log(`the values of a*b is`, a * b);
console.log(`the values of a/b is`, a / b);



//Assignment Operators
var c = b;
// c += 2;     // c = c + 2 
// c -= 2;     // c = c - 2
// c *= 2;     // c = c * 2
c /= 2;        // c = c / 2
console.log(c);




//Comparison Operators
var d = 40;
var e = 30;

// console.log(d == e);
// console.log(d > e);
// console.log(d < e);
// console.log(d <= e);
// console.log(d >= e);



//Logical Operators
//logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);


// //logical Or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);

// //logical not
console.log(!false);
console.log(!true);



//Functions in JavaScript
//follows DRY Principle = Do Not Repeat Yourself

function avg(f, g) {
    h = (f + g) / 2;
    return h;
}

c1 = avg(14, 6);
c2 = avg(50, 20);
console.log(c1, c2);


function bmi(weight, height) {
    k = weight / (height * height)
    return k;
}

stu1 = bmi(80, 1.88);
stu2 = bmi(92, 1.80);
console.log(stu1, stu2);



function linear(x, y, z) {
    z = x + y;
    return z;
}

v1 = linear(20, 10);
v2 = linear(10, 20);

console.log(v1, v2);


//Conditionals in JavaScript
var age = 43;
//Single If Statement
// if (age < 21) {
//     console.log(`You are under 21. you're not allowed to drink liquor`);
//     return age;
// }

//If-Else Statement
// if (age < 21) {
//     console.log(`You are under 21. you're not allowed to drink`);
//     return age;
// }
// else {
//     console.log(`You are 21 or over. you can drink`);
// }


//Multiple If-Else statements

//If Else Ladder
if (age < 21) {
    console.log(`You are under 21. you're not allowed to drink liquor`);
    return age;
}
else if (age > 50){
    console.log(`You are 50. You should avoid liquor`);
}
else{
    console.log(`You are younger than 21. You cannot drink`);
}


// //


function checkAge(age){

    if (age < 21) {
        console.log(`You are under 21. you're not allowed to drink liquor`);
        return age;
    }
    else if (age > 50){
        console.log(`You are 50. You should avoid liquor`);
    }
    else{
        console.log(`You are younger than 21. You cannot drink`);
    }

    checkAge(37);   
     
}
