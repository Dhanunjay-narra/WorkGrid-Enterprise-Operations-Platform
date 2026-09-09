export function generateAiGatewayRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
