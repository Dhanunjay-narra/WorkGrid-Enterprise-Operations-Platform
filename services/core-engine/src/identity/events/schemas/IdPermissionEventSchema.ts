export interface IdPermissionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdPermissionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
