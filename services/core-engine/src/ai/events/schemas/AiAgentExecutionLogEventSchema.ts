export interface AiAgentExecutionLogEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class AiAgentExecutionLogEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
