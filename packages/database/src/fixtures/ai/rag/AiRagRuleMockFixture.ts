export function generateAiRagRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
