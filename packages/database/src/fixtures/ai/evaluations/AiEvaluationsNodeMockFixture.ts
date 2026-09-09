export function generateAiEvaluationsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
