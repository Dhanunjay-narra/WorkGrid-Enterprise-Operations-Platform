export function generateAiGatewayAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
