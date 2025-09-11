export interface ClinicOutcomes {
  timeInRangeData: { label: string; value: number }[];
  gmiData: { date: string; gmi: number }[];
  activePatients: number;
  dateRange: { start: string; end: string };
  lastUpdated: string;
}

export interface TimeInRangeData {
  name: string;
  value: number;
}
export interface GMIData {
  name: string;
  value: number;
}
export interface ClinicSummary {
  activePatients: number;
  dateRange: { start: string; end: string };
  lastUpdated: string;
}
