export function generateAiEvaluationsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
