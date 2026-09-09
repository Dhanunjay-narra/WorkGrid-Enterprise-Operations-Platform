export function generateAiAgentsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
