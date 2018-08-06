import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Breadcrumb } from './breadcrumb';
import { CoursesService } from '../../services/courses/courses.service';
import breadcrumbsEnum from './breadcrumbs.enum';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public crumbs: Breadcrumb[] = [];
  public currentPath: Breadcrumb;

  constructor(
    private router: Router,
    private coursesService: CoursesService) { }

  ngOnInit() {
    const path = this.router.url.split('/');
    path.shift();

    if (path.length > 0) {
      this.crumbs = path.map((item: string, i: number) => {
        let itemPath = path.slice(0, i + 1);
        if (breadcrumbsEnum[item]) {
          return new Breadcrumb( '/' + itemPath.join('/'), breadcrumbsEnum[item]);
        } else {
          const courseItem = this.coursesService.getItemById(+item);
          return new Breadcrumb( '/' + itemPath.join('/'), courseItem.title);
        }
      });
      this.currentPath = this.crumbs.pop();
    }
  }

}
