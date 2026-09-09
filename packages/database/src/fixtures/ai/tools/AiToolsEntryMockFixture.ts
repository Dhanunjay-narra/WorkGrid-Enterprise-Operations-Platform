export function generateAiToolsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
