export interface CommWebhookDispatchLogEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommWebhookDispatchLogEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
