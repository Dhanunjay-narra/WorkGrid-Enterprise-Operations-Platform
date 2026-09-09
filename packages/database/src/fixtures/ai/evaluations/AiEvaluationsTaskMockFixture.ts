export function generateAiEvaluationsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
