// function call

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
console.log(person.fullName.call(person1));

// 2

const person3 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person4 = {
    firstName:"John",
    lastName: "Doe"
}
const person5 = {
    firstName:"Mary",
    lastName: "Doe"
}

// This will return "Mary Doe"
console.log(person.fullName.call(person5));

// 3 

const person6 = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person7 = {
    firstName:"John",
    lastName: "Doe"
}

console.log(person.fullName.call(person7, "Oslo", "Norway"));

//function apply

const persons = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const persons1 = {
    firstName:"John",
    lastName: "Doe"
}

console.log(person.fullName.call(persons1, "Oslo", "Norway"));

// function bind 

const on = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}

let fullName1 = on.fullName.bind(member);
console.log(fullName1);

// Function to increment counter
function add() {
    let counter = 0;
    counter += 1;
    return counter;
}

// Call add() 3 times
console.log(add());
console.log(add());
console.log(add());

//The counter should now be 3. But it is 1.