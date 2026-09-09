export interface BiAnomalyThresholdEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class BiAnomalyThresholdEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
