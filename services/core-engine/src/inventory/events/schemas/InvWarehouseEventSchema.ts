export interface InvWarehouseEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvWarehouseEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
