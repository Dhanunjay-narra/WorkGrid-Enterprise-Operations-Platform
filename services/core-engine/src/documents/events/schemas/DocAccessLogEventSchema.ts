export interface DocAccessLogEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class DocAccessLogEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
