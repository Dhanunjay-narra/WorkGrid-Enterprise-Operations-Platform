export interface EvtIdempotencyRecordEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class EvtIdempotencyRecordEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
