export interface FinInvoiceEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinInvoiceEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
