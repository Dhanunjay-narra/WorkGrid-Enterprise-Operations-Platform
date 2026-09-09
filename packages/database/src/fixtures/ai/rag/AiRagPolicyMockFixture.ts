export function generateAiRagPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
