export interface IdSsoConfigEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdSsoConfigEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
