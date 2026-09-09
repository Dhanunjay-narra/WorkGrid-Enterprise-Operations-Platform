export interface FinGeneralLedgerEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinGeneralLedgerEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
