export function generateAiEvaluationsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
