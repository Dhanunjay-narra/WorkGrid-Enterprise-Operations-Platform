export interface IntWebhookEventLogEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IntWebhookEventLogEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
