export function generateAiAgentsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
