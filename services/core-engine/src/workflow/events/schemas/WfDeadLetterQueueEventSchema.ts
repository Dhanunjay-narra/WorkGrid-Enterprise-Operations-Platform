export interface WfDeadLetterQueueEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfDeadLetterQueueEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
