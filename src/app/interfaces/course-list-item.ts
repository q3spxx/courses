export class CourseListItem {
  public id: number;
  public title: string;
  public creationDate: Date;
  public duration: number;
  public description: string;
  public topRate: boolean;
  constructor(
    id: number,
    title: string,
    description: string,
    creationDate: Date,
    duration: number,
    topRate: boolean
  ) {
    this.id = id;
    this.title = title,
    this.description = description;
    this.creationDate = creationDate;
    this.duration = duration;
    this.topRate = topRate;
  }
}
