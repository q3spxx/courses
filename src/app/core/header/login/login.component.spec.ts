import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    component = new LoginComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be true', () => {
    component.login();
    expect(component.isLogin).toBeTruthy();
  });
});
