export interface EvtEventSubscriptionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class EvtEventSubscriptionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
