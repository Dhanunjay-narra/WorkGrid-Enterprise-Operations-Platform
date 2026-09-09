export interface InvStockMovementEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvStockMovementEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
