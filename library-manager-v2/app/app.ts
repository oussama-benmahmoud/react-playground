import {Category} from "./enums";
import {Book, Magazine} from "./interfaces";
import {Employee, Researcher, UniversityLibrarian} from "./classes";
import * as util from "./lib/utilityFunctions";

/*function PrintBookInfo({title, author}: Book): void {
    console.log(`${title} was authored by ${author}`);
}*/


let [book1, book2] = util.GetAllBooks();
/*PrintBookInfo(book1);
PrintBookInfo(book2);
*/

/*function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}*/

// LogFavoriteBooks(util.GetAllBooks());

/*let {title: booktitle, author: bookauthor} = book1;
console.log(booktitle);
console.log(bookauthor);*/

let schoolBooks: Book[] = [
    {id: 10, title: 'Algo', author: 'John Doe', available: true, category: Category.Software},
    {id: 20, title: 'Architecture', author: 'John Doe', available: true, category: Category.Software},
    {id: 30, title: 'Design 101', author: 'John Doe', available: true, category: Category.Biography},
];

let booksRead: Book[] = util.GetAllBooks();
booksRead.push(...schoolBooks);
//console.log(booksRead);

/*let catalogLocation: [string, Book] = ['A 182.25.5', book1];
catalogLocation[2] = 'hello';*/

interface KeyValuePair<K, V> extends Array<K|V> {
    0: K;
    1: V;
}

let catalogLocation: KeyValuePair<string, Book> = ['A 182.25.5', book1];
catalogLocation[2] = 'hey';

let allBooks: Book[] = util.GetAllBooks();
let allMagazines: Magazine[] = util.GetAllMagazines();

let readingMaterial: PrintMaterial = allBooks[0];

function PrintTitle(item: PrintMaterial): void {
    console.log(item.title);
}

// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]);

let serialNovel: Serial = {
    id: 10,
    title: 'Hello World',
    author: 'Magnus',
    available: true,
    category: Category.Biography,
    publisher: 'AHT'
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(UniversityLibrarian, [Employee, Researcher]);

let newLibrarian = new UniversityLibrarian();
//newLibrarian.doResearch('Eco');

// let frequency: 'monthly' | 'annually' = 'monthly';
type Frequency = 'monthly' | 'annually';

function GetMagazineByFrequency(preferredFrequency: Frequency) {
    //
}

type PrintMaterial = Book | Magazine;
type Serial = Book & Magazine;
