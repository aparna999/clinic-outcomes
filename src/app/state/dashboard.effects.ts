import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DashboardActions } from '../state/dasboard.actions';
import { ClinicOutcomesService } from '../services/clinic-outcomes.service';
import { of } from 'rxjs';

@Injectable()
export class DashboardEffects {
  private actions$ = inject(Actions);
  private clinicService = inject(ClinicOutcomesService);

  loadDashboardData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DashboardActions.loadDashboardData),
      switchMap(() =>
        this.clinicService.getTimeInRange().pipe(
          map((data) => DashboardActions.loadDashboardDataSuccess({ data })),
          catchError((error) =>
            of(DashboardActions.loadDashboardDataFailure({ error }))
          )
        )
      )
    );
  });
}
