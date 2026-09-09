export function generateAiToolsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
