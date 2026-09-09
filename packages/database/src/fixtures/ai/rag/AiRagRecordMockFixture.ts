export function generateAiRagRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
