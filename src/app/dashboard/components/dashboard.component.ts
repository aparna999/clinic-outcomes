import { Component, OnInit, inject } from '@angular/core';
import { ClinicOutcomesService } from '../services/clinic-outcomes.service';
import { ClinicOutcomes, Period } from '../models/outcomes';
import { Observable, of } from 'rxjs';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { Store } from '@ngrx/store';
import { State } from '../state/dashboard.reducer';
import { DashboardActions } from '../state/dasboard.actions';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  reportingPeriods: Period[] = [
    Period.ThirtyDays,
    Period.SixtyDays,
    Period.NinetyDays,
  ];

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
  data$: Observable<ClinicOutcomes> = of();
  loading$: Observable<boolean> = of(false);

  constructor(private store: Store<{ dashboard: State }>) {}

  ngOnInit() {
    this.data$ = this.store.select((state) => state.dashboard.data);
    this.loading$ = this.store.select((state) => state.dashboard.loading);

    const period = Period.ThirtyDays;
    this.store.dispatch(DashboardActions.loadDashboardData({ period }));
  }

  onTabChanged(event: MatTabChangeEvent) {
    const period = this.reportingPeriods[event.index];
    this.store.dispatch(DashboardActions.loadDashboardData({ period }));
  }

  onPrint(): void {
    // this.data$ = this.store.select((state: any) => state.dashboard);
  }
}
