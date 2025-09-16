import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ClinicOutcomes, Period } from '../models/outcomes';

@Injectable({
  providedIn: 'root',
})
export class ClinicOutcomesService {
  constructor(private http: HttpClient) {}

  getClinicOutcomes(period: Period): Observable<ClinicOutcomes> {
    // build file name dynamically
    const url = `/mock-data-${period}.json`;
    return this.http.get<ClinicOutcomes>(url);
  }
}
