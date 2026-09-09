export function generateAiRagEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
