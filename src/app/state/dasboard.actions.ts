import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { TimeInRangeData } from '../models/outcomes';

export const DashboardActions = createActionGroup({
  source: 'Dashboard',
  events: {
    'Load Dashboard Data': emptyProps(),
    'Load Dashboard Data Success': props<{ data: TimeInRangeData[] }>(),
    'Load Dashboard Data Failure': props<{ error: unknown }>(),
  },
});

export const loadGMIData = createAction(
  '[Dashboard Page] Load Glucose Management Indicator Data'
);
