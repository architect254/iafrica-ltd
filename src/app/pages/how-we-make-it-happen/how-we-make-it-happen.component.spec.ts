import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeMakeItHappenComponent } from './how-we-make-it-happen.component';

describe('HowWeMakeItHappenComponent', () => {
  let component: HowWeMakeItHappenComponent;
  let fixture: ComponentFixture<HowWeMakeItHappenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWeMakeItHappenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowWeMakeItHappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
