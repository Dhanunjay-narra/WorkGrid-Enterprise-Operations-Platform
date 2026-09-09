export interface FinJournalEntryEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class FinJournalEntryEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
