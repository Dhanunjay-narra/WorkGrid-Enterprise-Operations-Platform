export interface SecComplianceReportEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SecComplianceReportEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
