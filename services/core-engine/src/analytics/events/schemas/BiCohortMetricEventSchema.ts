export interface BiCohortMetricEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class BiCohortMetricEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
