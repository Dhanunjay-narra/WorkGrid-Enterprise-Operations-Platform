export function generateAiAgentsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
