export interface CommTypingStateEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommTypingStateEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
