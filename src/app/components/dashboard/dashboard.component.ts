import { Component, OnInit, inject } from '@angular/core';
import { ClinicOutcomesService } from '../../services/clinic-outcomes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private readonly clinicOutcomeService = inject(ClinicOutcomesService);
  ngOnInit() {
    this.clinicOutcomeService
      .getTimeInRange()
      .subscribe((res) => console.log(res));
  }
}
