export function generateAiRagQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
