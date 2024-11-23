import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTestimonialComponent } from './carousel-testimonial.component';

describe('CarouselTestimonialComponent', () => {
  let component: CarouselTestimonialComponent;
  let fixture: ComponentFixture<CarouselTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
