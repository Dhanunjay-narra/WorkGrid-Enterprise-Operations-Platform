export function generateAiAgentsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
