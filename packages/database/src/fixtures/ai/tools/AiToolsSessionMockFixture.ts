export function generateAiToolsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
