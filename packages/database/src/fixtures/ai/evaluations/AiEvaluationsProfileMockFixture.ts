export function generateAiEvaluationsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
