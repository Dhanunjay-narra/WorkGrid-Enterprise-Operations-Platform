export function generateAiGatewayMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
