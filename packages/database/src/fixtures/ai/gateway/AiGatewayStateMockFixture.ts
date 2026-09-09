export function generateAiGatewayStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
