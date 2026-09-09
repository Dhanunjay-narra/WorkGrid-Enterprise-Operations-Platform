export interface EvtReplayJobEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class EvtReplayJobEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
