import { Questions } from "./questions";

export class Chapter{
    id: number;
    title: string;
    description?: string;
    questions?: Questions[];
}