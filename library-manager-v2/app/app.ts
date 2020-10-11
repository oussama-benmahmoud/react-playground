import {Category} from "./enums";
import * as util from "./lib/utilityFunctions";


// interface LibMgtCallback {
//     (err: Error, titles: string[]): void;
// }
//
// function getBooksByCategory(cat: Category, callback: LibMgtCallback): void {
//     setTimeout(() => {
//         try {
//             let foundBooks: string[] = util.GetBookTitlesByCategory(cat)
//             if(foundBooks.length>0) {
//                 callback(null, foundBooks);
//             }
//             else {
//                 throw new Error('no book found.');
//             }
//         } catch (error) {
//             callback(error, null);
//         }
//     }, 2000);
// }
//
// function logCategorySearch(err: Error, titles: string[]): void {
//     if(err) {
//         console.log(`error message: ${err.message}`);
//     } else {
//         console.log(`found the following titles:`);
//         console.log(titles);
//     }
// }
//
// console.log('beginning search...');
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('search submitted...');

// function getBooksByCategory(cat: Category): Promise<string[]> {
//     let p: Promise<string[]> = new Promise<string[]>((resolve, reject) => {
//         setTimeout(() => {
//             let foundBooks: string[] = util.GetBookTitlesByCategory(cat);
//             if(foundBooks.length>0) {
//                 resolve(foundBooks);
//             } else {
//                 reject('no books found for that category');
//             }
//         }, 2000);
//     });
//
//     return p;
// }
//
// console.log('beginning search...');
// getBooksByCategory(Category.Poetry)
//     .then(titles => {
//         console.log(`found titles: ${titles}`);
//         throw 'something bad happend!';
//         return titles.length;
//     }, reason => {return 0;})
//     .then(numOfBooks => console.log(`number of books: ${numOfBooks}`))
//     .catch(reason => console.log(reason));
// console.log('search submitted...');

function getBooksByCategory(cat: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            let foundBooks: string[] = util.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            } else {
                reject('no books found for that category');
            }
        }, 2000);
    });
}

async function logSearchResults(bookCategory: Category) {
    let foundBooks = await getBooksByCategory(bookCategory);
    console.log(foundBooks);
}

console.log('beginning search...');
logSearchResults(Category.Poetry)
    .catch(reason => console.log(reason));
console.log('search submitted...');
