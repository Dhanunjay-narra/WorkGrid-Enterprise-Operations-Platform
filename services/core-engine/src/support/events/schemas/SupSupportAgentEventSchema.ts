export interface SupSupportAgentEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupSupportAgentEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
