export function generateAiToolsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
