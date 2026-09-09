export function generateAiToolsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
