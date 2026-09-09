export function generateAiGatewayReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
