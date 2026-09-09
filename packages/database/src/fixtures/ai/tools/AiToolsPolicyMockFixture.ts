export function generateAiToolsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
