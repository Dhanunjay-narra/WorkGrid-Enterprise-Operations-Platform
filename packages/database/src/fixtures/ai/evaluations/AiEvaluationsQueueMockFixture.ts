export function generateAiEvaluationsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
