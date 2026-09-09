export interface EvtDeadLetterEventEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class EvtDeadLetterEventEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
