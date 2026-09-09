export interface SupTicketEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupTicketEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
