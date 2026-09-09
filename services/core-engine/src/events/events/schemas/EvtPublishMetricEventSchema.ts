export interface EvtPublishMetricEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class EvtPublishMetricEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
