import { Component } from '@angular/core';
import { TeamComponent } from "../team/team.component";

@Component({
  selector: 'app-navbar-about',
  standalone: true,
  imports: [TeamComponent],
  templateUrl: './navbar-about.component.html',
  styleUrl: './navbar-about.component.css'
})
export class NavbarAboutComponent {

}
