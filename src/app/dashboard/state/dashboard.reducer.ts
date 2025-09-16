import { createReducer, on } from '@ngrx/store';
import { DashboardActions } from './dasboard.actions';
import { ClinicOutcomes, Period } from '../models/outcomes';

export interface State {
  data: ClinicOutcomes;
  loading: boolean;
  error?: string | null;
}

export const initialState: State = {
  data: {
    period: Period.ThirtyDays,
    timeInRangeData: [],
    gmiData: [],
    activePatients: 0,
    dateRange: { start: '', end: '' },
    lastUpdated: '',
  },
  loading: false,
  error: null,
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadDashboardData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DashboardActions.loadDashboardDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(DashboardActions.loadDashboardDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
