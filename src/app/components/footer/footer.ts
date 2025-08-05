import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule , RouterLink ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  faCode = faCode;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  currentYear = new Date().getFullYear();

}
