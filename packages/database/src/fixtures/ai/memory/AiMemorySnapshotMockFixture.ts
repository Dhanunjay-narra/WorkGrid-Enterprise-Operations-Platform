export function generateAiMemorySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemorySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
