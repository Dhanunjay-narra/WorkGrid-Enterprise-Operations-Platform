export function generateAiGatewayProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
