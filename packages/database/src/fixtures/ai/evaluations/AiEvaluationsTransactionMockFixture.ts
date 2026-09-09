export function generateAiEvaluationsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
