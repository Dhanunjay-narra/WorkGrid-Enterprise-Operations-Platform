export interface FinCostCenterEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinCostCenterEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
