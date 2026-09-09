export interface PrjIssueReportEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjIssueReportEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
