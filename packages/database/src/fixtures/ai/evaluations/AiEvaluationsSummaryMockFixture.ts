export function generateAiEvaluationsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
