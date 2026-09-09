export function generateAiToolsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
