export class Customer {
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