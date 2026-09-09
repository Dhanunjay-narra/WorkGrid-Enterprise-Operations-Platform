export function generateAiGatewayTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
