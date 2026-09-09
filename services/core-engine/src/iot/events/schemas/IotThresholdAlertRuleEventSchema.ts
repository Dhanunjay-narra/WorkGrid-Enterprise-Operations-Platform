export interface IotThresholdAlertRuleEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IotThresholdAlertRuleEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
