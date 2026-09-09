export function generateAiGatewaySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewaySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
