export interface AiToolCallRecordEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class AiToolCallRecordEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
