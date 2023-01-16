

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

function avg(f, g){
    h = (f + g)/2;
    return h ;
}

c1 = avg(14, 6);
c2 = avg(50, 20);
console.log(c1, c2);


function bmi(weight, height){
    k = weight/(height*height)
    return k;
}

stu1 = bmi(80, 1.88);
stu2 = bmi(92, 1.80);
console.log(stu1, stu2);
