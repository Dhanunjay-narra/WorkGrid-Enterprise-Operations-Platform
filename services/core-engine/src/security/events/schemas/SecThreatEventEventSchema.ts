export interface SecThreatEventEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SecThreatEventEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
