export interface ClinicOutcomes {
  period: Period;
  timeInRangeData: TimeInRangeData[];
  gmiData: GMIData[];
  activePatients: number;
  dateRange: DateRange;
  lastUpdated: string;
}

export interface TimeInRangeData {
  name: string;
  series: {
    name: string;
    value: number;
  };
}

export interface GMIData {
  name: string;
  value: number;
}

export interface DateRange {
  start: string;
  end: string;
}

export enum Period {
  ThirtyDays = 30,
  SixtyDays = 60,
  NinetyDays = 90,
}
