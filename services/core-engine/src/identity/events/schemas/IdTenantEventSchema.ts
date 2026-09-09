export interface IdTenantEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdTenantEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
