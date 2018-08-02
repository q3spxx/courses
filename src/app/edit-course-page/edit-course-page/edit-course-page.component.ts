import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseListFields } from '../../interfaces/course-list-fields';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css']
})
export class EditCoursePageComponent implements OnInit {

  public id: string;
  public title: string;
  public description: string;
  public creationDate: Date;
  public duration: number;
  public topRate: boolean;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      const item = this.coursesService.getItemById(data['id']);
      this.id = item.id;
      this.title = item.title;
      this.description = item.description;
      this.creationDate = item.creationDate;
      this.duration = item.duration;
      this.topRate = item.topRate;
    });
  }

  onSave(fields: CourseListFields): void {
    this.coursesService.updateItem(
      this.id,
      fields.title,
      fields.description,
      fields.creationDate,
      fields.duration,
      this.topRate
    );
    this.router.navigateByUrl('/courses');
  }
  onCancel(): void {
    this.router.navigateByUrl('/courses');
  }

}
