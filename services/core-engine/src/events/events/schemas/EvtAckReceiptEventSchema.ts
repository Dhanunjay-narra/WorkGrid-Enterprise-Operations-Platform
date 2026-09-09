export interface EvtAckReceiptEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class EvtAckReceiptEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
