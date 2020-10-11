import {Book, Magazine} from "../interfaces";
import {Category} from "../enums";

export function GetAllBooks(): Book[] {
    return  [
        {id: 1, title: 'Architecture 101', author: 'John Doe', available: true, category: Category.Biography},
        {id: 2, title: 'Just a book!', author: 'Josh Atkinson', available: true, category: Category.Fiction},
        {id: 3, title: 'DevOps Cookbook', author: 'Robert Shmidt', available: false, category: Category.Poetry},
        {id: 4, title: 'React Cookbook', author: 'Eric Shmidt', available: true, category: Category.History}
    ];
}

export function GetAllMagazines(): Magazine[] {
    return  [
        {title: 'Mag 1', publisher: 'OReilly'},
        {title: 'Mag 2', publisher: 'OReilly'},
        {title: 'Mag 3', publisher: '1OF1'},
    ];
}

export function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
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
