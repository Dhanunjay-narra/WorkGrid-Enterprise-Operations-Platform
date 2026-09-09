export function generateAiGatewayEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
