import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  ClinicOutcomes,
  GMIData,
  Period,
  TimeInRangeData,
} from '../models/outcomes';

@Injectable({
  providedIn: 'root',
})
export class ClinicOutcomesService {
  constructor(private http: HttpClient) {}

  // getTimeInRange(): Observable<TimeInRangeData[]> {
  //   return this.http.get<TimeInRangeData[]>('/time-range-data.json');
  // }

  // getGMI(): Observable<GMIData[]> {
  //   return this.http.get<GMIData[]>('/gmi-data.json');
  // }

  getClinicOutcomes(period: Period): Observable<ClinicOutcomes> {
    // build file name dynamically
    const url = `/mock-data-${period}.json`;
    return this.http.get<ClinicOutcomes>(url);
  }
}
