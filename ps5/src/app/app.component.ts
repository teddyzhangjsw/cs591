import { Component } from '@angular/core';
import { Info} from './WEATHER-MOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'City Weather';
  info = Info;

}
