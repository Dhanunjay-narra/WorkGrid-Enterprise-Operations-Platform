export interface FinFinancialForecastEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinFinancialForecastEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
