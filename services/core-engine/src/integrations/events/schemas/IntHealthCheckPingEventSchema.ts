export interface IntHealthCheckPingEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IntHealthCheckPingEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
