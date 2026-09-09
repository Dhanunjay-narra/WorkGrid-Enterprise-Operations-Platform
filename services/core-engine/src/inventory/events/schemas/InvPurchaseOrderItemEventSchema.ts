export interface InvPurchaseOrderItemEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvPurchaseOrderItemEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
