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
    _description: string,
    _creationDate: Date,
    _duration: number,
    _topRate: boolean
  ) {
    this.id = _id;
    this.title = _title,
    this.description = _description;
    this.creationDate = _creationDate;
    this.duration = _duration;
    this.topRate = _topRate;
  }
}
