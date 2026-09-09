export function generateAiAgentsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
