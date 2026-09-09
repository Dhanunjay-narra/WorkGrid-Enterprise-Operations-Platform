export interface HrTimesheetEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrTimesheetEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
