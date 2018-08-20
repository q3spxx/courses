import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from './breadcrumb';
import breadcrumbsMap from './breadcrumbs-map';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnChanges {
  
  @Input() public title = '';
  @Input() public id = 0;
  
  public breadcrumbs: Breadcrumb[] = [];
  public currentPath: Breadcrumb = new Breadcrumb('', '');
  
  constructor(
    private router: Router) { }
    
  ngOnChanges() {
    this.selectPath();
  }
  ngOnInit() {
    this.selectPath();
  }
  selectPath() {
    switch(this.router.url) {
      case '/courses':
      this.makeBreadCrumbs([...breadcrumbsMap['/courses']]);
      break;
      case '/courses/new':
      this.makeBreadCrumbs([...breadcrumbsMap['/courses/new']]);
      break;
      default:
      this.makeBreadCrumbs(breadcrumbsMap['/courses/:id'].map((breadcrumb) => {
        return {
          name: breadcrumb.name.replace(':title', this.title),
          url: breadcrumb.url.replace(':id', `${this.id}`)
        }
      }))
    }
  }
  makeBreadCrumbs(breadcrumbs: any) {
    if (breadcrumbs.length > 0) {
      const currentPath = breadcrumbs.pop();
      this.currentPath = new Breadcrumb(currentPath.name, currentPath.url);
    }
    this.breadcrumbs = breadcrumbs.map((breadcrumb: any) => {
      return  new Breadcrumb(breadcrumb.name, breadcrumb.url);
    });
  }
}
