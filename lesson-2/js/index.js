console.log("cursorni\n pastga sindirish \n") // \n 1ta pastga sindiradi.

// Qo'shtirnoqlar

const name1 = "1-qoshtirnoq \n";
var satr1 = "\"2\"-qoshtirnoq \n";
let satr2 = 'JavaScript';

console.log(name1, satr1, satr2);

//////////////////////////////////////////////////////////////////////////

var yosh = 20;

console.log(`Yoshim ${yosh} da.`);

////////////////////////////////////////////////////////////////////

/// Funksiyalar

/* function nom([omil [, omil]]) {
     ...turli amallar...
     [return qiymat;]
}*/ 

////// 1
function x2(a) {
    var b = a * 2;
    return b;
}
console.log(x2(2)); // funksiya elon qilindi.

////// 2
fun = function f() {
    f = 'ishladi';
    console.log(f);
}
fun();

////////////////////////////////////////////////////////////////////

//// Obyekt

///// 1
let human = {
    name: "John",
    age: 20,
    job: "developer"
};
console.log(human);

////// 2
const obj = { name: "Cevin", age: 30, job: "Design", adress: "America" };
console.log(obj);

obj['age'] = 29;
console.log(obj);

////// 3
let home = [ "Kitchen", "Bathroom", "Bedroom" ];
console.log(home);

console.log(home[0]);

////////////////////////////////////////////////////////////////////