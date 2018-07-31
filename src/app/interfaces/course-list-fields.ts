export class CourseListFields {
    public title: string;
    public description: string;
    public creationDate: Date;
    public duration: number;

    constructor(_title: string, _description: string, _creationDate: Date, _duration: number) {
        this.title = _title;
        this.description = _description;
        this.creationDate = _creationDate;
        this.duration = _duration;
    }
}