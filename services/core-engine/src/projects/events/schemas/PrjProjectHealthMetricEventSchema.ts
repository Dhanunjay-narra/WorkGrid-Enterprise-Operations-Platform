export interface PrjProjectHealthMetricEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjProjectHealthMetricEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
