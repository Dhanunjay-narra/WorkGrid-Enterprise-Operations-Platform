export interface WfEventTriggerEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfEventTriggerEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
