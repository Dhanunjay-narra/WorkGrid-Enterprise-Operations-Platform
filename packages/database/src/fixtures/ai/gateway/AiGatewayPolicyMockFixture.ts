export function generateAiGatewayPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
