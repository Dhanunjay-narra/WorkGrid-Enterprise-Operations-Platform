export function generateAiToolsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
