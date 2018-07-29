import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CourseListItemComponent } from './course-list-item.component';
import { CourseListItem } from '../course-list-item';

@Component({
  template: `
    <app-course-list-item
      [courseItem] = 'courseItem'
      (delete) = 'onDelete($event)' >
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
  onDelete() {}
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
    spyOn(testHost, 'onDelete');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });
  it('should calls onDelete', () => {
    const button = fixture.debugElement.query(By.css('.btn-danger'));
    button.triggerEventHandler('click');
    expect(testHost.onDelete).toHaveBeenCalled();
  });
});
