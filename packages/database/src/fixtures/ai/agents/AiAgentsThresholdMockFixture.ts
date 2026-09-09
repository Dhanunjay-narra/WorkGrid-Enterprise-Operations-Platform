export function generateAiAgentsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
