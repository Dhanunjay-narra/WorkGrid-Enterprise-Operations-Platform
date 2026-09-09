export interface IntWebhookSubscriptionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IntWebhookSubscriptionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
