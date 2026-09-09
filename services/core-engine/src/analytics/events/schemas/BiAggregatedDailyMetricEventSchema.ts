export interface BiAggregatedDailyMetricEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class BiAggregatedDailyMetricEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
