export interface FinLedgerAccountEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinLedgerAccountEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
