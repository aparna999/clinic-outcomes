import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { ClinicOutcomes } from '../models/outcomes';

export const DashboardActions = createActionGroup({
  source: 'Dashboard',
  events: {
    'Load Dashboard Data': props<{ period: number }>(),
    'Load Dashboard Data Success': props<{ data: ClinicOutcomes }>(),
    'Load Dashboard Data Failure': props<{ error: string }>(),
  },
});

export const loadGMIData = createAction(
  '[Dashboard Page] Load Glucose Management Indicator Data'
);
