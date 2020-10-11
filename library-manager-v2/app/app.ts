import {Category} from "./enums";
import {Book, Magazine} from "./interfaces";
import {Employee, Researcher, UniversityLibrarian} from "./classes";
import * as util from "./lib/utilityFunctions";

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

let kidBook = new ChildrenBook();
kidBook.Checkin()
    .Clean()
    .Checkout();

let ebook = new ElectronicBook();
ebook.Checkin()
    .RemoveFromCustomerDevice()
    .Checkout();