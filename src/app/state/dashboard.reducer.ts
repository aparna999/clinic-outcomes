import { createReducer, on } from '@ngrx/store';
import { DashboardActions } from '../state/dasboard.actions';
import { GMIData, TimeInRangeData } from '../models/outcomes';

export interface State {
  timeRangeData: TimeInRangeData[];
  gmiData: GMIData[];
}

export const initialState: State = {
  timeRangeData: [],
  gmiData: [],
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadDashboardDataSuccess, (state, { data }) => ({
    ...state,
    ...data,
    error: null,
  })),
  on(DashboardActions.loadDashboardDataFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
