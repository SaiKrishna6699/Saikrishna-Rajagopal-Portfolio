import { Component } from '@angular/core';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  left = faArrowRight;
  picture="https://drive.google.com/file/d/1dLAhMy3Zx5nVaCyChKW9EEcwBLEiJdxF/view?usp=share_link";
}
