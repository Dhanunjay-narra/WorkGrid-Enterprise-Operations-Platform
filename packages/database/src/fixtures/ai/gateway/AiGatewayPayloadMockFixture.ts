export function generateAiGatewayPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
