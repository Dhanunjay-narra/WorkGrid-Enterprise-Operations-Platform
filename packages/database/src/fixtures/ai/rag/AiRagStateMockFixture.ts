export function generateAiRagStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
