import { CourseFormModule } from './course-form.module';

describe('CourseFormModule', () => {
  let courseFormModule: CourseFormModule;

  beforeEach(() => {
    courseFormModule = new CourseFormModule();
  });

  it('should create an instance', () => {
    expect(courseFormModule).toBeTruthy();
  });
});
