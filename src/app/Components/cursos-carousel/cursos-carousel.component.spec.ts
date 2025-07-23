import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCarouselComponent } from './cursos-carousel.component';

describe('CursosCarouselComponent', () => {
  let component: CursosCarouselComponent;
  let fixture: ComponentFixture<CursosCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
