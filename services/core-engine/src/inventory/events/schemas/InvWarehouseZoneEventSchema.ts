export interface InvWarehouseZoneEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvWarehouseZoneEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
