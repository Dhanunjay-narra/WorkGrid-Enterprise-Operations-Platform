export interface IntSyncHistoryEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IntSyncHistoryEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
