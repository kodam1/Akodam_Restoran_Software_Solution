import { Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ServiceComponent } from './common/service/service.component';
import { AboutComponent } from './common/about/about.component';
import { MenuComponent } from './common/menu/menu.component';
import { ReservationComponent } from './common/reservation/reservation.component';
import { TeamComponent } from './common/team/team.component';
import { TestimonialComponent } from './common/testimonial/testimonial.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { BookingComponent } from './common/booking/booking.component';
import { ContactComponent } from './common/contact/contact.component';
import { HeroComponent } from './common/hero/hero.component';
import { NavbarServiceComponent } from './common/navbar-service/navbar-service.component';
import { NavbarAboutComponent } from './common/navbar-about/navbar-about.component';
import { NavbarMenuComponent } from './common/navbar-menu/navbar-menu.component';
import { NavbarTeamComponent } from './common/navbar-team/navbar-team.component';
import { NavbarTestimonialComponent } from './common/navbar-testimonial/navbar-testimonial.component';
import { NavbarBookingComponent } from './common/navbar-booking/navbar-booking.component';
import { NavbarContactComponent } from './common/navbar-contact/navbar-contact.component';

export const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'header', component: HeaderComponent },
  {path:'navbar', component: NavbarComponent },
  {path:'service', component: ServiceComponent },
  {path:'navbar-service', component: NavbarServiceComponent },
  {path:'about', component: AboutComponent },
  {path:'navbar-about', component: NavbarAboutComponent },
  {path:'menu', component: MenuComponent },
  {path:'navbar-menu', component: NavbarMenuComponent },
  {path:'reservation', component: ReservationComponent },
  {path:'team', component: TeamComponent },
  {path:'navbar-team', component: NavbarTeamComponent },
  {path:'testimonial', component: TestimonialComponent },
  {path:'navbar-testimonial', component: NavbarTestimonialComponent },
  {path:'footer', component: FooterComponent },
  {path:'booking', component: BookingComponent },
  {path:'navbar-booking', component: NavbarBookingComponent },
  {path:'contact', component: ContactComponent },
  {path:'navbar-contact', component: NavbarContactComponent },
  {path:'hero', component: HeroComponent },

];
