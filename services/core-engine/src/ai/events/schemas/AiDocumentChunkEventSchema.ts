export interface AiDocumentChunkEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class AiDocumentChunkEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
