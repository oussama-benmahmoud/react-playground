function GetAllBooks() {

    let books = [
        {id: 1, title: 'Architecture 101', author: 'John Doe', available: true, category: Category.Biography},
        {id: 2, title: 'Just a book!', author: 'Josh Atkinson', available: true, category: Category.Fiction},
        {id: 3, title: 'DevOps Cookbook', author: 'Robert Shmidt', available: false, category: Category.Poetry},
        {id: 4, title: 'React Cookbook', author: 'Eric Shmidt', available: true, category: Category.History}
    ];

    return books;
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

enum Category { Biography, Poetry, Fiction, History, Children};

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

function GetBookById(id: number) {
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

//************************************************

let checkedOutBooks = GetTitles(false);
checkedOutBooks.forEach(value => console.log(value));

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
