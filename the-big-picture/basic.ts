class Customer {
    name: string;
    isActive: boolean;

    constructor(name: string) {
        this.name = name;
        this.isActive = true;
    }

    annonce() {
        return "Hello, my name is " + this.name;
    }
}

// create a new instance
let firstCustomer = new Customer("John");
let message: string = firstCustomer.annonce();

// change h1 text
let heading = document.querySelector("h1");
heading!.textContent = message;


// inheritance
class SpecialCustomer extends Customer {
    // ...
}

let specialCustomer = new SpecialCustomer("John");
let newMessage = specialCustomer.annonce();
console.log(newMessage);