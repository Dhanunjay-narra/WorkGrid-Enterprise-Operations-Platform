export function generateAiEvaluationsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
