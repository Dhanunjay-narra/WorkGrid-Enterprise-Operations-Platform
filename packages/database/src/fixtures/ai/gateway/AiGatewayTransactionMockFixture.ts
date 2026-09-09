export function generateAiGatewayTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
