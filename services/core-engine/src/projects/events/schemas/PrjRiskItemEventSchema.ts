export interface PrjRiskItemEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjRiskItemEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
