export interface DocDocumentFileEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class DocDocumentFileEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
