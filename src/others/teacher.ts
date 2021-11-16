import { Chapter } from "./chapter";
import { Student } from "./student";

export class Teacher {
    id: number;
    name: string;
    students: Student[];
    email: string;
    password: string;
    chapters: Chapter[];
}