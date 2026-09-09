export function generateAiToolsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
