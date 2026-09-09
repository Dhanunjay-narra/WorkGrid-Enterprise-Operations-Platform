export function generateAiToolsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
