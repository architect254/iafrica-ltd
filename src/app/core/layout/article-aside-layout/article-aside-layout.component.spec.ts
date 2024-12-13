import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAsideLayoutComponent } from './article-aside-layout.component';

describe('ArticleAsideLayoutComponent', () => {
  let component: ArticleAsideLayoutComponent;
  let fixture: ComponentFixture<ArticleAsideLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleAsideLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleAsideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
