export function generateAiAgentsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
