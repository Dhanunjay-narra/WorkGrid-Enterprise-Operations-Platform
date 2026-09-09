export function generateAiEvaluationsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
