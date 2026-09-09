export interface PrjTimeEntryEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjTimeEntryEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
