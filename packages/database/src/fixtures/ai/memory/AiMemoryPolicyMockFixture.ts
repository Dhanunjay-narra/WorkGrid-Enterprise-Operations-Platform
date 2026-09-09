export function generateAiMemoryPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
