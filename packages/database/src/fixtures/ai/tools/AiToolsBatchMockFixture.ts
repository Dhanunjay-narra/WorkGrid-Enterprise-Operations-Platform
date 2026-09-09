export function generateAiToolsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
