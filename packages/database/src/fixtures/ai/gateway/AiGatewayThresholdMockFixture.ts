export function generateAiGatewayThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
