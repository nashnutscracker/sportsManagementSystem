import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherOperationsComponent } from './teacher-operations.component';

describe('TeacherOperationsComponent', () => {
  let component: TeacherOperationsComponent;
  let fixture: ComponentFixture<TeacherOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
