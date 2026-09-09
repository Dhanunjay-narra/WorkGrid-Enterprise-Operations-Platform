export function generateAiAgentsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
