export function generateAiGatewayItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
