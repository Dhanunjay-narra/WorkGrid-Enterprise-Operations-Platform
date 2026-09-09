export function generateAiGatewayNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
