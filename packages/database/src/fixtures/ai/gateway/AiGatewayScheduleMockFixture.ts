export function generateAiGatewayScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewaySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
