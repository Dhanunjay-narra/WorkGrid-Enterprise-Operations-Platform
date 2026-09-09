export function generateAiAgentsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
