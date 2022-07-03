import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputpsComponent } from './inputps.component';

describe('InputpsComponent', () => {
  let component: InputpsComponent;
  let fixture: ComponentFixture<InputpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
