import { Component, OnInit, inject } from '@angular/core';
import { ClinicOutcomesService } from '../../services/clinic-outcomes.service';
import { GMIData, TimeInRangeData } from '../../models/outcomes';
import { Observable, of } from 'rxjs';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  timeRangeData$: Observable<TimeInRangeData[]> = of([]);
  gmiData$: Observable<GMIData[]> = of([]);

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

  ngOnInit() {
    this.timeRangeData$ = this.clinicOutcomeService.getTimeInRange();

    this.gmiData$ = this.clinicOutcomeService.getGMI();
  }
}
