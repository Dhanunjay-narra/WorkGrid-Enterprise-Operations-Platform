export function generateAiAgentsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
