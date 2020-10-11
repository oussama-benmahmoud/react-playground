import {Category} from "./enums";
import {Book, Librarian, Magazine} from "./interfaces";
import {Employee, Researcher, UniversityLibrarian, PublicLibrarian} from "./classes";
import * as util from "./lib/utilityFunctions";
import './LibrarianExtension';

class LibraryBook {
    Checkout(): this {
        console.log('Checking out a Book');
        return this;
    }

    Checkin(): this {
        //console.log('Checking in a Book');
        if(this instanceof ChildrenBook) {
            console.log('checking in a ChildrenBook');
        }

        if(this instanceof ElectronicBook) {
            console.log('checking in a ElectronicBook');
        }
        return this;
    }
}

class ChildrenBook extends LibraryBook {
    Clean(): this {
        console.log('Cleaning a Book');
        return this;
    }
}

class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice(): this {
        console.log('Removing book from device.');
        return this;
    }
}

/*
let kidBook = new ChildrenBook();
kidBook.Checkin()
    .Clean()
    .Checkout();

let ebook = new ElectronicBook();
ebook.Checkin()
    .RemoveFromCustomerDevice()
    .Checkout();*/

// let mergedBook: Book;
// mergedBook.publisher = 'Programming press';

// let newLibrarian = new UniversityLibrarian();
// newLibrarian.phone = '065416156';
// newLibrarian.hostSeminar('Test Sem');

function logVisitor(param: number | string) {
    if (typeof param === 'number') {
        console.log(`${param} new visitors arrived.`);
    }
    else {
        console.log(`${param.toUpperCase()} visited.`);
    }
}

// logVisitor(5);
// logVisitor("hey");

// let lib: Librarian = new PublicLibrarian();
// if (lib instanceof UniversityLibrarian) {
//     lib.assistFaculty();
// }
// if (lib instanceof PublicLibrarian) {
//     lib.teachCommunity();
// }

function isBook(text: Book | Magazine): text is Book {
    return (<Book>text).author !== undefined;
}

let readingMaterial: Book | Magazine = util.GetAllBooks()[0];

if (isBook(readingMaterial)) {
    console.log(`the book's author is ${readingMaterial.author}.`);
} else {
    console.log(`the magazine's publisher is ${readingMaterial.publisher}.`);
}