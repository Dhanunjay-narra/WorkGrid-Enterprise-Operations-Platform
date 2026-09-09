export function generateAiToolsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
