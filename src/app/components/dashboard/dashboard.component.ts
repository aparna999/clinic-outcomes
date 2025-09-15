import { Component, OnInit, inject } from '@angular/core';
import { ClinicOutcomesService } from '../../services/clinic-outcomes.service';
import { GMIData, TimeInRangeData } from '../../models/outcomes';
import { Observable, of } from 'rxjs';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { Store } from '@ngrx/store';
import { State } from '../../state/dashboard.reducer';
import * as DashboardActions from '../../state/dasboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  timeRangeData$: Observable<TimeInRangeData[]> = of([]);
  gmiData$: Observable<GMIData[]> = of([]);
  reportingPeriods = [30, 60, 90];

  view: [number, number] = [700, 400];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = LegendPosition.Below;

  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Time,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  private readonly clinicOutcomeService = inject(ClinicOutcomesService);
  dashboard$: Observable<State> = of();

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(DashboardActions.DashboardActions.loadDashboardData());

    this.timeRangeData$ = this.clinicOutcomeService.getTimeInRange();

    this.gmiData$ = this.clinicOutcomeService.getGMI();
  }

  onPrint(): void {
    this.dashboard$ = this.store.select((state: any) => state.dashboard);
  }
}
