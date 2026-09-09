export interface IdAuditTrailEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdAuditTrailEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
