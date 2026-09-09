export interface DocFileExportJobEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class DocFileExportJobEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
