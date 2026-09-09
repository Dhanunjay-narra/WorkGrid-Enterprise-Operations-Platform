export interface FinFxRateHistoryEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinFxRateHistoryEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
