// class intro

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML = "My car is " + myCar.age() + " years old.";

// Class Inheritance

class CarIs {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends CarIs {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCarIs = new Model("Ford", "Mustang");
document.getElementById("car").innerHTML = myCarIs.show();

// 2

class Car2 {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
  const myCar2 = new Car2("Ford");
  
  document.getElementById("car2").innerHTML = myCar2.cnam;
  
// 3

class Car3 {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

const myCar3 = new Car3("Ford");
myCar3.carname = "Volvo";
document.getElementById("car3").innerHTML = myCar3.carname;

// class static

class crs {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!";
    }
}

const myCar5 = new crs("Ford");

// You can call 'hello()' on the Car Class:
document.getElementById("car5").innerHTML = crs.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.