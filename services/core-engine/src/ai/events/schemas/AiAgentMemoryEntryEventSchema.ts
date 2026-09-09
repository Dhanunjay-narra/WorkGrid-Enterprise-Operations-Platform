export interface AiAgentMemoryEntryEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class AiAgentMemoryEntryEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
