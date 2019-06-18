import { Component, OnInit, Input } from '@angular/core';

import {WEATHER} from '../models/weatherModel';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {

  @Input() weatherDisplay: WEATHER;

  constructor() { }

  ngOnInit() {
  }

}
