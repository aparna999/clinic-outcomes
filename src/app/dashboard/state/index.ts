import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './dashboard.reducer';

export const selectDashboardState = createFeatureSelector<State>('dashboard');

export const selectDashboardData = createSelector(
  selectDashboardState,
  (state) => state.data
);

export const selectDashboardLoading = createSelector(
  selectDashboardState,
  (state) => state.loading
);

export const selectDashboardError = createSelector(
  selectDashboardState,
  (state) => state.error
);
