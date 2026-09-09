export function generateAiGatewayRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
