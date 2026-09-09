export interface SupTicketTagEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupTicketTagEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
