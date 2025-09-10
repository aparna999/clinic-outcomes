import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { GMIData, TimeInRangeData } from '../models/outcomes';

@Injectable({
  providedIn: 'root',
})
export class ClinicOutcomesService {
  constructor(private http: HttpClient) {}

  getTimeInRange(): Observable<TimeInRangeData[]> {
    return this.http.get<TimeInRangeData[]>('/time-range-data.json');
  }

  getGMI(): Observable<GMIData[]> {
    return this.http.get<GMIData[]>('/gmi-data.json');
  }
}
