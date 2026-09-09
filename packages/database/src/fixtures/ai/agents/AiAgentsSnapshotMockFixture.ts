export function generateAiAgentsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
