import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    component = new LoginComponent();
  });

  it('should show you are logged in', () => {
    component.login();
    expect(component.message).toBe('you are logged in');
  });
});
