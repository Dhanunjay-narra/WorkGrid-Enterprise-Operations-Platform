export interface IdRoleEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdRoleEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
