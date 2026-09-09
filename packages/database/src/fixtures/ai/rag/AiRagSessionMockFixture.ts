export function generateAiRagSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
