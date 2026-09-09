export interface IdPolicyEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdPolicyEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
