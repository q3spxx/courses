import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Breadcrumb } from './breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  private map = {
    courses: 'Courses',
    new: 'New Course',
    videoCourse: 'Video course '
  };

  public crumbs: Breadcrumb[] = [];
  public currentPath: Breadcrumb;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const path = this.router.url.split('/');
    path.shift();

    if (path.length > 0) {
      this.crumbs = path.map((item: string, i: number) => {
        let itemPath = path.slice(0, i + 1);
        if (this.map[item]) {
          return new Breadcrumb( '/' + itemPath.join('/'), this.map[item]);
        } else {
          return new Breadcrumb( '/' + itemPath.join('/'), this.map.videoCourse + item);
        }
      });
      this.currentPath = this.crumbs.pop();
    }
  }

}
