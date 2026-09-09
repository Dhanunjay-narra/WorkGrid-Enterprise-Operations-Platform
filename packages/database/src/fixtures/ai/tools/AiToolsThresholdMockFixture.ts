export function generateAiToolsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
