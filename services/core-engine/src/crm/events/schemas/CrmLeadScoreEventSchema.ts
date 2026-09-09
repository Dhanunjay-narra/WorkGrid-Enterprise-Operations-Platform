export interface CrmLeadScoreEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmLeadScoreEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
