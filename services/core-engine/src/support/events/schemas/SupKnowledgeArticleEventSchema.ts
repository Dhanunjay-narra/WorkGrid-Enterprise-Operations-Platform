export interface SupKnowledgeArticleEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupKnowledgeArticleEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
