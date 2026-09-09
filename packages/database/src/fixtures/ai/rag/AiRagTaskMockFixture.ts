export function generateAiRagTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
