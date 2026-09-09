export interface CommMentionRecordEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommMentionRecordEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
