export function generateAiAgentsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
