export interface PrjBudgetLineEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjBudgetLineEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
