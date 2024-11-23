import { Component } from '@angular/core';
import { ServiceComponent } from "../service/service.component";
import { AboutComponent } from "../about/about.component";
import { MenuComponent } from "../menu/menu.component";
import { ReservationComponent } from "../reservation/reservation.component";
import { TeamComponent } from "../team/team.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { HeroComponent } from "../hero/hero.component";
import { CarouselTestimonialComponent } from "../carousel-testimonial/carousel-testimonial.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServiceComponent, AboutComponent, MenuComponent, ReservationComponent, TeamComponent, TestimonialComponent, HeroComponent, CarouselTestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
