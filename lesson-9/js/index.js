// JS Callbacks

function func1() {
    function myDisplayer(some) {
        document.getElementById("demo").innerHTML = some;
    }
    function myFirst() {
        myDisplayer("Hello");
    }

    function mySecond() {
        myDisplayer("Goodbye");
    }

    myFirst();
    mySecond();
};
func1();

// 2

function func2() {
    function myDisplayer(some) {
        document.getElementById("result").innerHTML = some;
    }

    function myCalculator(num1, num2) {
        let sum = num1 + num2;
        return sum;
    }

    let result = myCalculator(5, 5);
    myDisplayer(result);
};
func2();

// 3

function func3() {
    // Create an Array
    const myNumbers = [4, 1, -20, -7, 5, 9, -6];

    // Call removeNeg with a callback
    const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

    // Display Result
    document.getElementById("demo1").innerHTML = posNumbers;

    // Keep only positive numbers
    function removeNeg(numbers, callback) {
        const myArray = [];
        for (const x of numbers) {
            if (callback(x)) {
            myArray.push(x);
            }
        }
        return myArray;
    }
};
func3();

// JS Asynchronous

function myFunc() {
    function myDisplayer(something) {
        document.getElementById("demo2").innerHTML = something;
    }

    function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
    }

    myCalculator(5, 5, myDisplayer);
};
myFunc();

// 1

function myFunc1() {
    setTimeout(myFunction, 3000);

    function myFunction() {
        document.getElementById("demo3").innerHTML = "I love You !!";
    }
};
myFunc1();

// 2

function myFunc2() {
    setInterval(myFunction, 1000);

    function myFunction() {
        let d = new Date();
        document.getElementById("demo4").innerHTML=
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
    }
};
myFunc2();