export interface HrOkrGoalEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrOkrGoalEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
