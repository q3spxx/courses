import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CourseListItemComponent } from './course-list-item.component';
import { CourseListItem } from '../course-list-item';

@Component({
  template: `
    <app-course-list-item
      [courseItem] = 'courseItem' >
    </app-course-list-item>`
})

class TestHostComponent {
  public courseItem: CourseListItem = {
    id: '1',
    title: 'Video course 1',
    duration: 88,
    creationDate: new Date('05 23 2018'),
    description: 'lorem'
  };
}

describe('CourseListItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });
});
