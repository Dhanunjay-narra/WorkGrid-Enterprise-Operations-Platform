export interface FinVendorBillEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinVendorBillEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
