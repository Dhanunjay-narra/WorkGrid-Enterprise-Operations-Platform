export interface DocChunkIndexEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class DocChunkIndexEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
