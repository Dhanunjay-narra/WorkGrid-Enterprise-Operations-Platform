export interface AiEvaluationScoreEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class AiEvaluationScoreEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
