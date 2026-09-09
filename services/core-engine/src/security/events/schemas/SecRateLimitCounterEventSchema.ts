export interface SecRateLimitCounterEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SecRateLimitCounterEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
