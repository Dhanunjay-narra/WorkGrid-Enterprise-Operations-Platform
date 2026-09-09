export interface CommMessageReactionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommMessageReactionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
