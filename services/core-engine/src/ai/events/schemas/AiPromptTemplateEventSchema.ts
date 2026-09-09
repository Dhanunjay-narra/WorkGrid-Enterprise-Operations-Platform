export interface AiPromptTemplateEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class AiPromptTemplateEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
