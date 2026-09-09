export function generateAiGatewayConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
