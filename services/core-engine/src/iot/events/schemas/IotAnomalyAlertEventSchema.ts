export interface IotAnomalyAlertEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IotAnomalyAlertEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
