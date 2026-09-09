export function generateAiAgentsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
