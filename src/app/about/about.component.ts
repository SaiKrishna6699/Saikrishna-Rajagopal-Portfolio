import { Component } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faDownload = faDownload;
  resumeLink = "https://drive.google.com/file/d/1mDl8SwJouxwckoRxUUpMQHF5F7IR952v/view?usp=sharing";
}
