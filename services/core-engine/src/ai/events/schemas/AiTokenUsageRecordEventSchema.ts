export interface AiTokenUsageRecordEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class AiTokenUsageRecordEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
