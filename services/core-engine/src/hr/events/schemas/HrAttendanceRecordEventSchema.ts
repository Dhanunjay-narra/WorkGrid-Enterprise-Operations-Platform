export interface HrAttendanceRecordEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrAttendanceRecordEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
