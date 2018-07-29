export class CourseListItem {
  public id: string;
  public title: string;
  public creationDate: Date;
  public duration: number;
  public description: string;
  public topRate: boolean;
  constructor(
    _id: string,
    _title: string,
    _creationDate: Date,
    _duration: number,
    _topRate: boolean,
    _description: string
  ) {
    this.id = _id;
    this.title = _title,
    this.creationDate = _creationDate;
    this.duration = _duration;
    this.description = _description;
    this.topRate = _topRate;
  }
}
