export function generateAiToolsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
