
import { TestBed } from '@angular/core/testing';

import { GetWeatherService } from './getWeather.service';

describe('GetWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetWeatherService = TestBed.get(GetWeatherService);
    expect(service).toBeTruthy();
  });
});
