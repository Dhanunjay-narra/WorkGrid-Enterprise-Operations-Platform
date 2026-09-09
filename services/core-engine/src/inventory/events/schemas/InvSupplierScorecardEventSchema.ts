export interface InvSupplierScorecardEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvSupplierScorecardEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
