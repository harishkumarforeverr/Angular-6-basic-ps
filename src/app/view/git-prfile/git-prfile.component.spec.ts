import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitPrfileComponent } from './git-prfile.component';

describe('GitPrfileComponent', () => {
  let component: GitPrfileComponent;
  let fixture: ComponentFixture<GitPrfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitPrfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitPrfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
