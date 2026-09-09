export interface SecIpAllowlistRuleEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SecIpAllowlistRuleEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
