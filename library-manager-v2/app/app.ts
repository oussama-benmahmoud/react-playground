import {Category} from "./enums";
import {Book, Librarian, Magazine} from "./interfaces";
import {Employee, Researcher, UniversityLibrarian, PublicLibrarian} from "./classes";
import * as util from "./lib/utilityFunctions";

let lib1 = new UniversityLibrarian();
let lib2 = new PublicLibrarian();

try {
    lib1.assistFaculty = () => console.log('assistFaculty replacement method');
    lib2.teachCommunity = () => console.log('teachCommunity replacement method');
} catch (error) {
    console.log(error);
}

lib1.assistFaculty();
lib2.teachCommunity();