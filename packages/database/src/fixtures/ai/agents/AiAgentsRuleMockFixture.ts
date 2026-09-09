export function generateAiAgentsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
