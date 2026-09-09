export function generateAiRagPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
