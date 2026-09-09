export interface HrTaxDeductionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrTaxDeductionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
