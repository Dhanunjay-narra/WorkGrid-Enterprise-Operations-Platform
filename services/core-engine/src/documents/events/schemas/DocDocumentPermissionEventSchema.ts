export interface DocDocumentPermissionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class DocDocumentPermissionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
