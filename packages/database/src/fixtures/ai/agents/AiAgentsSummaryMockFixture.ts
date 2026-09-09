export function generateAiAgentsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
