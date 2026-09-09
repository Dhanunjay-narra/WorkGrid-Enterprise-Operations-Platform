export function generateAiToolsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
