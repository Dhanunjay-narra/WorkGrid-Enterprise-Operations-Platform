export interface FinCashFlowItemEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinCashFlowItemEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
