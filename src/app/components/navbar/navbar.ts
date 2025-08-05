import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCog , faHome , faEnvelope,faBriefcase , faCode} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  faCog= faCog;
  faHome= faHome;
  faEnvelope= faEnvelope;
  faBriefcase= faBriefcase;
  faCode= faCode;
}
