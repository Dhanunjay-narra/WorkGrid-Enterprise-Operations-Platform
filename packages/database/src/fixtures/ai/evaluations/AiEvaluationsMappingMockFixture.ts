export function generateAiEvaluationsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
