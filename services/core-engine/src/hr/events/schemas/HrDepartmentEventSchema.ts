export interface HrDepartmentEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrDepartmentEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
