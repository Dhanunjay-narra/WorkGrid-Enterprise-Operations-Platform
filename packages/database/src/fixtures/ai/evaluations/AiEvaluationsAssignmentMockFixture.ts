export function generateAiEvaluationsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
