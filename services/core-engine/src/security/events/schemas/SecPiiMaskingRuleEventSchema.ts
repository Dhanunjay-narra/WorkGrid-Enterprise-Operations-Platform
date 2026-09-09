export interface SecPiiMaskingRuleEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SecPiiMaskingRuleEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
