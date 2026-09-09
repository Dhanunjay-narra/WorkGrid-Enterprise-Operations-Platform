export function generateAiEvaluationsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
