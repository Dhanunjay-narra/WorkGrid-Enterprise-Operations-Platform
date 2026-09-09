export function generateAiToolsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
