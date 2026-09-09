export function generateAiEvaluationsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
