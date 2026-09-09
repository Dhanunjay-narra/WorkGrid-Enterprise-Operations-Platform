export interface SupRoutingConditionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupRoutingConditionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
