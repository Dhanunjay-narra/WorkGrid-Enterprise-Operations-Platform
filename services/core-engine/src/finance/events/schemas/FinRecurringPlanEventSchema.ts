export interface FinRecurringPlanEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinRecurringPlanEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
