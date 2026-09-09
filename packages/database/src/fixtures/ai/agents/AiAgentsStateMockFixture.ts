export function generateAiAgentsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
