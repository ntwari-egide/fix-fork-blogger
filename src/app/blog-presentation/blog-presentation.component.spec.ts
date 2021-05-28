import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPresentationComponent } from './blog-presentation.component';

describe('BlogPresentationComponent', () => {
  let component: BlogPresentationComponent;
  let fixture: ComponentFixture<BlogPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
