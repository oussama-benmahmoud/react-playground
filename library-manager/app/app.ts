import {Category} from "./enums";
import {Book, Magazine} from "./interfaces";
import {Purge} from "./lib/utilityFunctions";
import Shelf from "./shelf";

function GetAllBooks(): Book[] {
    return  [
        {id: 1, title: 'Architecture 101', author: 'John Doe', available: true, category: Category.Biography},
        {id: 2, title: 'Just a book!', author: 'Josh Atkinson', available: true, category: Category.Fiction},
        {id: 3, title: 'DevOps Cookbook', author: 'Robert Shmidt', available: false, category: Category.Poetry},
        {id: 4, title: 'React Cookbook', author: 'Eric Shmidt', available: true, category: Category.History}
    ];
}

function LogFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
        if(currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitle: string[] = [];

    for (let currentBook of allBooks) {
        if(currentBook.category === categoryFilter) {
            filteredTitle.push(currentBook.title);
        }
    }

    return filteredTitle;
}

function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function GetBookById(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id == id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer ' + name);
    if(age) {
        console.log('Age: ' + age);
    }
    if(city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log('Checking out books for ' + customer);

    let booksCheckedOut: string[] = [];

    for (let bookID of bookIDs) {
        const book = GetBookById(bookID);
        if(book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if(typeof bookProperty == 'string') {
        // get all books by author
        for (let book of allBooks) {
            if(book.author == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    else if(typeof bookProperty == 'boolean') {
        // get all books by availability
        for (let book of allBooks) {
            if(book.available == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

//************************************************

/*let ref: ReferenceItem = new ReferenceItem('Updated Doodles 101', 2016);
ref.printItem();
ref.publisher = 'Packt';
console.log(ref.publisher);*/

/*let refBook: ReferenceItem = new Encyclopedia('WWII', 1999, 10);
refBook.printCitation();*/

/*let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
}

let mypaper = new Newspaper('Journal 98', 1989);
mypaper.printCitation();*/

/*let myBook: Book = {
    id: 5,
    title: 'Dummy World',
    author: 'Just Me',
    available: true,
    category: Category.Children,
    pages: 252,
    markDamaged: (reason) => {
        console.log('Damaged: ' + reason);
    }
}*/

// PrintBook(myBook);
// myBook.markDamaged('torn pages');

// let logDamage: DamageLogger;
// logDamage = (damage:string) => console.log('Damage reported: '+damage);
// logDamage('coffee strains')

/*let checkedOutBooks = GetTitles(false);
checkedOutBooks.forEach(value => console.log(value));*/

/*let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Lynda';
favoriteLibrarian.assistCustomer('Eric');*/

/*let myBooks: string[] = CheckoutBooks('David', 1);
myBooks.forEach(title => console.log(title));*/

// LogFirstAvailable();

/*const fictionBooks = GetBookTitlesByCategory();
fictionBooks.forEach(title => console.log(title));*/

//CreateCustomer('Yanni');
//CreateCustomer('Yanni', 6);
//CreateCustomer('Yanni', 6, 'Paris');

/*
let x: number;
x=5;
let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name: string, id:number) => { return id+name; }

let myID: string = IdGenerator('Dan', 15);
console.log(myID);
*/

/*
const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
fictionBooks.forEach((value, index, array) => console.log(++index + ' - ' + value));
*/

let inventory: Array<Book> = [
    { id: 10, title:'C++', author:'ABC', available: true, category: Category.Software},
    { id: 11, title:'Java', author:'Steve Kender', available: true, category: Category.Software},
    { id: 12, title:'JavaScript ES15', author:'Maria B.', available: true, category: Category.Software},
    { id: 13, title:'Kotlin 101', author:'Loto Eto', available: true, category: Category.Software},
];

/*let purgedBooks: Array<Book> = Purge<Book>(inventory);
purgedBooks.forEach(book => console.log(book.title));

let purgedNums: Array<number> = Purge<number>([1,2,3,4]);
console.log(purgedNums);*/

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
let firstBook: Book = bookShelf.getFirst();

let magazines: Array<Magazine> = [
    { title: 'magazine 001', publisher: 'Packt'},
    { title: 'magazine 525', publisher: 'Oreilly'}
];

let magazinShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazinShelf.add(mag));
let firstMag = magazinShelf.getFirst();

/*let numberShelf: Shelf<number> = new Shelf<number>();
[1, 2, 3, 4].forEach(value => numberShelf.add(value));*/

magazinShelf.printTitles();

let softwareBook = bookShelf.find('Java');
console.log(`${softwareBook.title} (${softwareBook.author})`);