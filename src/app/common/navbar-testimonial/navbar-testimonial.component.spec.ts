import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTestimonialComponent } from './navbar-testimonial.component';

describe('NavbarTestimonialComponent', () => {
  let component: NavbarTestimonialComponent;
  let fixture: ComponentFixture<NavbarTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
