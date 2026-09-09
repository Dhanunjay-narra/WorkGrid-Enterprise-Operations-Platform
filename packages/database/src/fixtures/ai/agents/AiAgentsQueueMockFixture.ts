export function generateAiAgentsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
