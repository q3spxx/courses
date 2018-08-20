export class CourseListItemData {
    id: number;
    name: string;
    description: string;
    isTopRated: boolean;
    date: string;
    authors: Author[] = [];
    length: number;
    constructor(
        name: string,
        description: string,
        isTopRated: boolean,
        date: string,
        length: number
    ) {
        this.id = Math.floor(Math.random() * 10000);
        this.name = name;
        this.description = description;
        this.isTopRated = isTopRated;
        this.date = date;
        this.length = length;
    }
}
export interface Author {
    id: number,
    firstName: string,
    lastName: string
}