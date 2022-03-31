import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticlePageComponent } from './blog-article-page.component';

describe('Blog Article Page Component', () => {
  let component: BlogArticlePageComponent;
  let fixture: ComponentFixture<BlogArticlePageComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogArticlePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticlePageComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
