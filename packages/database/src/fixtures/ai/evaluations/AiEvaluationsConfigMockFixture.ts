export function generateAiEvaluationsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
