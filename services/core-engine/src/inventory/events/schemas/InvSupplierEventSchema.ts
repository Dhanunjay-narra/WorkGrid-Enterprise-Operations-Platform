export interface InvSupplierEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvSupplierEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
