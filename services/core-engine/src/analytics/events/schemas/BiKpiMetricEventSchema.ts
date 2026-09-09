export interface BiKpiMetricEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class BiKpiMetricEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
