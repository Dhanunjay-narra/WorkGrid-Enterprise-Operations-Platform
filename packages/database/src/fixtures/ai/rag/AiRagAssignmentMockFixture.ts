export function generateAiRagAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
