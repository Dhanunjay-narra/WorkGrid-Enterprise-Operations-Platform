export interface AiAgentConversationSessionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class AiAgentConversationSessionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
