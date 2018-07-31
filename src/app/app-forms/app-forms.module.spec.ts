import { AppFormsModule } from './app-forms.module';

describe('AppFormsModule', () => {
  let appFormsModule: AppFormsModule;

  beforeEach(() => {
    appFormsModule = new AppFormsModule();
  });

  it('should create an instance', () => {
    expect(appFormsModule).toBeTruthy();
  });
});
