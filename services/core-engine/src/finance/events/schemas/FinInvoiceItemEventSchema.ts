export interface FinInvoiceItemEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinInvoiceItemEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
