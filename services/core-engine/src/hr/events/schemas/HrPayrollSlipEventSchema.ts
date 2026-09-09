export interface HrPayrollSlipEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrPayrollSlipEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
