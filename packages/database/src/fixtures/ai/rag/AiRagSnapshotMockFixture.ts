export function generateAiRagSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
