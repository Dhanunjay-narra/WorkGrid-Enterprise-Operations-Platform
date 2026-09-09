export interface FinBankReconciliationEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinBankReconciliationEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
