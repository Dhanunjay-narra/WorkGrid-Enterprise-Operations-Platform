export function generateAiToolsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
