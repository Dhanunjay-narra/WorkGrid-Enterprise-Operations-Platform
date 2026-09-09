export function generateAiAgentsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
