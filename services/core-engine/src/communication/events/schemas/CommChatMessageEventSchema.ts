export interface CommChatMessageEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommChatMessageEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
