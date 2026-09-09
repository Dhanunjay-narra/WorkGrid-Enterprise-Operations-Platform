export interface IotTelemetryMetricEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IotTelemetryMetricEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
