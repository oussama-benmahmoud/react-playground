import {Category} from "./enums";
import * as util from "./lib/utilityFunctions";


interface LibMgtCallback {
    (err: Error, titles: string[]): void;
}

function getBooksByCategory(cat: Category, callback: LibMgtCallback): void {
    setTimeout(() => {
        try {
            let foundBooks: string[] = util.GetBookTitlesByCategory(cat)
            if(foundBooks.length>0) {
                callback(null, foundBooks);
            }
            else {
                throw new Error('no book found.');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

function logCategorySearch(err: Error, titles: string[]): void {
    if(err) {
        console.log(`error message: ${err.message}`);
    } else {
        console.log(`found the following titles:`);
        console.log(titles);
    }
}

console.log('beginning search...');
getBooksByCategory(Category.Software, logCategorySearch);
console.log('search submitted...');
