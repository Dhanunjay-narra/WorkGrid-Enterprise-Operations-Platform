export function generateAiRagEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
