export function generateAiGatewayQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
