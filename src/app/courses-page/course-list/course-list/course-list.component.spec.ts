import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OrderByPipe } from '../order-by.pipe';
import { CoursesService } from '../../../services/courses/courses.service';
import { CourseListComponent } from './course-list.component';
import { CourseListItem } from '../../../interfaces/course-list-item';
import { FilterPipe } from '../filter.pipe';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let courseListService: Partial<CoursesService>;
  let filterPipe: Partial<FilterPipe>;
  const courseListItemsMock: CourseListItem[] = [{
    id: '1',
    title: 'Video course 1',
    duration: 88,
    topRate: true,
    creationDate: new Date('05 23 2018'),
    description: 'lorem'
  }];

  beforeEach(async(() => {
    courseListService = {
      getList(): CourseListItem[] {
        return courseListItemsMock;
      }
    };
    filterPipe = {transform(courseListItems: CourseListItem[]) {return courseListItems; }};
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, OrderByPipe ],
      providers: [
        { provide: CoursesService, useValue: courseListService },
        { provide: FilterPipe, useValue: filterPipe }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spyOn(console, 'log');
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('console.log should be called with Load more', () => {
    const button = fixture.debugElement.query(By.css('.load_more'));
    button.triggerEventHandler('click', null);
    expect(console.log).toHaveBeenCalledWith('Load more');
  });
});
