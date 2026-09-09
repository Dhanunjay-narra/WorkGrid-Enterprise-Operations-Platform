export interface SupSlaTimerEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupSlaTimerEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
