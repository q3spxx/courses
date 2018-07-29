import { AddCoursePageModule } from './add-course-page.module';

describe('AddCoursePageModule', () => {
  let addCoursePageModule: AddCoursePageModule;

  beforeEach(() => {
    addCoursePageModule = new AddCoursePageModule();
  });

  it('should create an instance', () => {
    expect(addCoursePageModule).toBeTruthy();
  });
});
