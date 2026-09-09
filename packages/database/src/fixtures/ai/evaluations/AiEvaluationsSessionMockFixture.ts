export function generateAiEvaluationsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
