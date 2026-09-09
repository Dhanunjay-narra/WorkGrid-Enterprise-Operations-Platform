export function generateAiRagThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
