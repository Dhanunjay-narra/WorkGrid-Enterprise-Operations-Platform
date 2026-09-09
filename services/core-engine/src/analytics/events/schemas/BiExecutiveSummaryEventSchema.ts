export interface BiExecutiveSummaryEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class BiExecutiveSummaryEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
