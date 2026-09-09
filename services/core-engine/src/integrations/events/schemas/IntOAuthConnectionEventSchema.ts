export interface IntOAuthConnectionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IntOAuthConnectionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
