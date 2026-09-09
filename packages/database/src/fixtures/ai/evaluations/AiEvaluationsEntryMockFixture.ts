export function generateAiEvaluationsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
