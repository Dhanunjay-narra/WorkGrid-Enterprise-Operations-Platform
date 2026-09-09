export function generateAiGatewaySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewaySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
