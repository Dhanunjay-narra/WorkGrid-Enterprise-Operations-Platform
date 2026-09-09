export function generateAiEvaluationsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
