export interface IntSyncQueueItemEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IntSyncQueueItemEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
