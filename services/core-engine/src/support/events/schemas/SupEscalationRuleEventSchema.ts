export interface SupEscalationRuleEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupEscalationRuleEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
