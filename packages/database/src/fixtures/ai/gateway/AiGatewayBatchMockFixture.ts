export function generateAiGatewayBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
