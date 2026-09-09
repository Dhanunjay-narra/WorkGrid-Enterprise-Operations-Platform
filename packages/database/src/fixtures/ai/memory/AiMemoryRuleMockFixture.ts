export function generateAiMemoryRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
