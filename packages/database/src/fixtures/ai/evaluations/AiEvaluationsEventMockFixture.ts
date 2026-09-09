export function generateAiEvaluationsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
