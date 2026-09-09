export function generateAiRagMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
