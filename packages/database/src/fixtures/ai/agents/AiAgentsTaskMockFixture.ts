export function generateAiAgentsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
