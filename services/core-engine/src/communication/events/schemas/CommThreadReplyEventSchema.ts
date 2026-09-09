export interface CommThreadReplyEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommThreadReplyEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
