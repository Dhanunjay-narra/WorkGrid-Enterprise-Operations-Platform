export function generateSecurityNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
