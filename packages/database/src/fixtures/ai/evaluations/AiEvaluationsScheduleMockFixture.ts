export function generateAiEvaluationsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
