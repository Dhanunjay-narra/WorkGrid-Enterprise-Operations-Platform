export interface BiExportJobEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class BiExportJobEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
