export function generateAiAgentsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
