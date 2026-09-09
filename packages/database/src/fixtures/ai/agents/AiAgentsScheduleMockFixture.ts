export function generateAiAgentsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
