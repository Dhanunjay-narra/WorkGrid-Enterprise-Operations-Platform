export interface WfCronScheduleEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfCronScheduleEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
