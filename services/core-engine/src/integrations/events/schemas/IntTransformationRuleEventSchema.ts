export interface IntTransformationRuleEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IntTransformationRuleEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
