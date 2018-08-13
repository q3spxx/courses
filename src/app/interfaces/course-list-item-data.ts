export class CourseListItemData {
    public id: number;
    public name: string;
    public description: string;
    public date: string;
    public length: number;
    public isTopRated: boolean;
    public authors: Author[];

    constructor(
        name: string,
        description: string,
        date: Date,
        length: number,
        isTopRated: boolean
    ) {
        this.id =  Math.floor(Math.random() * 10000);
        this.name = name;
        this.description = description;
        this.date = date.toJSON();
        this.length = length;
        this.isTopRated = isTopRated;
        this.authors = [];
    }
}
export interface Author {
    id: number,
    firstName: string,
    lastName: string
}