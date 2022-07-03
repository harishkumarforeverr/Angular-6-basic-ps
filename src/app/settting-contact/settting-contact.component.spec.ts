import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetttingContactComponent } from './settting-contact.component';

describe('SetttingContactComponent', () => {
  let component: SetttingContactComponent;
  let fixture: ComponentFixture<SetttingContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetttingContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetttingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
