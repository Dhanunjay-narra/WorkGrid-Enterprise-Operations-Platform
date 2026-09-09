export interface IdSecurityKeyEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdSecurityKeyEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
