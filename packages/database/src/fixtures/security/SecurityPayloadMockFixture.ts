export function generateSecurityPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
