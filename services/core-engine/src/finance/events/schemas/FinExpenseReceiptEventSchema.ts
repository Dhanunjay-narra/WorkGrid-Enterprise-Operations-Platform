export interface FinExpenseReceiptEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinExpenseReceiptEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
