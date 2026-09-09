export interface SupSatisfactionReportEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupSatisfactionReportEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
