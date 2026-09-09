export function generateAiRagConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
