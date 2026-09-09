export interface EvtEventBatchEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class EvtEventBatchEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
