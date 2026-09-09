export interface AiToolDefinitionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class AiToolDefinitionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
