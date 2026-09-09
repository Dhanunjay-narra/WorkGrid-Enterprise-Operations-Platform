export interface CommDigestQueueEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommDigestQueueEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
