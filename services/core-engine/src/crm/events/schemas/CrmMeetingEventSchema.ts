export interface CrmMeetingEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmMeetingEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
