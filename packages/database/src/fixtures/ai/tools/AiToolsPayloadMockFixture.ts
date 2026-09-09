export function generateAiToolsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
