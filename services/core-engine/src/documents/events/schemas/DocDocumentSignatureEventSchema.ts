export interface DocDocumentSignatureEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class DocDocumentSignatureEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
