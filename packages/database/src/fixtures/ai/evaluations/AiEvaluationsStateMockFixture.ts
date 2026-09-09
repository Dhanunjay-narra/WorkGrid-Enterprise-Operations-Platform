export function generateAiEvaluationsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
