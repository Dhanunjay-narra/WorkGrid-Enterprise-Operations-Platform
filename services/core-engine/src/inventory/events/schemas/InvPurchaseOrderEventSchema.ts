export interface InvPurchaseOrderEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvPurchaseOrderEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
