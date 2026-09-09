export function generateAiEvaluationsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
