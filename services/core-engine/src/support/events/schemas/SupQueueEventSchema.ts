export interface SupQueueEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupQueueEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
