// JS Promise

function myFunc() {
    function myDisplayer(some) {
        document.getElementById("demo").innerHTML = some;
    }

    let myPromise = new Promise(function(myResolve, myReject) {
        let x = 0;

        // The producing code (this may take some time)

        if (x == 0) {
            myResolve("OK");
        } else {
            myReject("Error");
        }
    });

    myPromise.then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
    );
};
myFunc();

function myFunc1(){
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });

    myPromise.then(function(value) {
        document.getElementById("demo1").innerHTML = value;
    });
};
myFunc1();

// 3

function myFunc2() {
    function myDisplayer(some) {
        document.getElementById("demo3").innerHTML = some;
    }

    function getFile(myCallback) {
        let req = new XMLHttpRequest();
        req.onload = function() {
            if (req.status == 200) {
                myCallback(this.responseText);
            } else {
                myCallback("Error: " + req.status);
            }
        }
        req.open('GET', "my-car.html");
        req.send();
    }
    getFile(myDisplayer); 
};
myFunc2();