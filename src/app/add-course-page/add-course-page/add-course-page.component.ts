import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { CourseListItem } from '../../interfaces/course-list-item';
import { CourseListFields } from '../../interfaces/course-list-fields';
import { Router } from '@angular/router';
import { AuthorisationService } from '../../services/authorisation/authorisation.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

  public default: CourseListItem;

  public title = '';
  public description = '';
  public creationDate = new Date();
  public duration = 0;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private authService: AuthorisationService
  ) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
    }
  }

  onSave(fields: CourseListFields): void {
    this.coursesService.createItem(
      fields.title,
      fields.description,
      fields.creationDate,
      fields.duration,
      true
    );
    this.router.navigateByUrl('/courses');
  }
  onCancel(): void {
    this.router.navigateByUrl('/courses');
  }

}
