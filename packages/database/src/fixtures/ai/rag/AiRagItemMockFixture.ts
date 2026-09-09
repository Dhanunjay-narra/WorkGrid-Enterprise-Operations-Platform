export function generateAiRagItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
