export function generateAiGatewaySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewaySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
