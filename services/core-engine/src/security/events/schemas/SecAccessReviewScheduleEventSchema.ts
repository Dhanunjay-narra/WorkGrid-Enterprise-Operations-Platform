export interface SecAccessReviewScheduleEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SecAccessReviewScheduleEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
