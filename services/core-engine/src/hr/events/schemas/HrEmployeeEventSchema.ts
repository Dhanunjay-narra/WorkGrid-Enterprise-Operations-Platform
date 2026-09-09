export interface HrEmployeeEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrEmployeeEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
