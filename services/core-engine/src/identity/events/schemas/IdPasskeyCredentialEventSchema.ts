export interface IdPasskeyCredentialEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdPasskeyCredentialEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
