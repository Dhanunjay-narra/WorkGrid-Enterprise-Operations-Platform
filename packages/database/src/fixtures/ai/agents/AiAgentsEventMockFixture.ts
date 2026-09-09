export function generateAiAgentsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
