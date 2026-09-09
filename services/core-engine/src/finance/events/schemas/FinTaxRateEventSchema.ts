export interface FinTaxRateEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinTaxRateEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
