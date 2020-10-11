import {Category} from "./enums";
import {Book, Logger, Author, Librarian, Magazine} from "./interfaces";
import {UniversityLibrarian, ReferenceItem} from "./classes";
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
