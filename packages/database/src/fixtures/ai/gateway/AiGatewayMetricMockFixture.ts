export function generateAiGatewayMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
