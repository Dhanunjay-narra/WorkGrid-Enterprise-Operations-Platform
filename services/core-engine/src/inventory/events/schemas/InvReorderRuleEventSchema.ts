export interface InvReorderRuleEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvReorderRuleEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
