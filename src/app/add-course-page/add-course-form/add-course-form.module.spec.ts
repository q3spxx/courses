import { AddCourseFormModule } from './add-course-form.module';

describe('AddCourseFormModule', () => {
  let addCourseFormModule: AddCourseFormModule;

  beforeEach(() => {
    addCourseFormModule = new AddCourseFormModule();
  });

  it('should create an instance', () => {
    expect(addCourseFormModule).toBeTruthy();
  });
});
