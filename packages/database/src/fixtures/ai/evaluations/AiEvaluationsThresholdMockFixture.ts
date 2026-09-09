export function generateAiEvaluationsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
