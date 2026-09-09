export function generateAiGatewayEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
