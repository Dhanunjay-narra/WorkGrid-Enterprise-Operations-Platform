export function generateAiToolsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
