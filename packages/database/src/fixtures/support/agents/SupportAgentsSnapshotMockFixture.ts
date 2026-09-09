export function generateSupportAgentsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
