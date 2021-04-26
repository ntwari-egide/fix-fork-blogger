import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBlogsComponent } from './other-blogs.component';

describe('OtherBlogsComponent', () => {
  let component: OtherBlogsComponent;
  let fixture: ComponentFixture<OtherBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
