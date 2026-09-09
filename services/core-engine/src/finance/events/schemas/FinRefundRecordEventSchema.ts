export interface FinRefundRecordEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinRefundRecordEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
