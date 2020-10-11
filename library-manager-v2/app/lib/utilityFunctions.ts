import {Book} from "../interfaces";
import {Category} from "../enums";

export function GetAllBooks(): Book[] {
    return  [
        {id: 1, title: 'Architecture 101', author: 'John Doe', available: true, category: Category.Biography},
        {id: 2, title: 'Just a book!', author: 'Josh Atkinson', available: true, category: Category.Fiction},
        {id: 3, title: 'DevOps Cookbook', author: 'Robert Shmidt', available: false, category: Category.Poetry},
        {id: 4, title: 'React Cookbook', author: 'Eric Shmidt', available: true, category: Category.History}
    ];
}
