export function generateAiAgentsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
