export interface HrSalaryComponentEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrSalaryComponentEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
