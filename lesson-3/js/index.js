/// Objects

const obj = {type: "car", age: 10, color: "green", brend: "BMW"}

console.log(obj);

///////////////////

const phone = {
    type: "samsung",
    color: "gray",
    memory: "120gb",
    camera: "1200mp",
    price: "90$",
    top: 4
};
console.log(phone);
/////////////////////////////////////////////////////////////////

console.log("//////////\\\\\\\\\\\\\\\\");

/////////////////////////////////////////////////////////////////

/// Maps

const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

const map = fruits;
const deleted = fruits.delete("apples");
const has = fruits.has("apples");

console.log(map, deleted, has);

/////////////////////////////////////////////////////////////////

console.log("//////////\\\\\\\\\\\\\\\\");

/////////////////////////////////////////////////////////////////

/// Tanlash operatori IF
const num = 10;

if (num == 10) {
    console.log("number - 10");
} else {
    console.log("number not - 10");
}

const time = 25;

if (time == 20) {
    console.log("Hali dars jarayoni emas");
} else if (time <= 24) {
    console.log("Hali dars jarayoni emas"); 
} else if (time === 25) {
    console.log("Dars tugugan");
} else {
    console.log("error");
}

/////////////////////////////////////////////////////////////////

console.log("//////////\\\\\\\\\\\\\\\\");

/////////////////////////////////////////////////////////////////

/// Switch
let day;

switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
    break;
    case 1:
        day = "Monday";
    break;
    case 2:
        day = "Tuesday";
    break;
    case 3:
        day = "Wednesday";
    break;
    case 4:
        day = "Thursday";
    break;
    case 5:
        day = "Friday";
    break;
    case 6:
        day = "Saturday";
    break;
    default:
        day = "Date not exist";
}

console.log("Today is " + day);