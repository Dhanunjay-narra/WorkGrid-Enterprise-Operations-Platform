export interface InvBatchSerialEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvBatchSerialEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
