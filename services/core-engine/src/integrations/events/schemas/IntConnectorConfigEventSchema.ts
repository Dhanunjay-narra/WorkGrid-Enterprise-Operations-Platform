export interface IntConnectorConfigEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IntConnectorConfigEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
