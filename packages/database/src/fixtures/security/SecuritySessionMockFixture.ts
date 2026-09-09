export function generateSecuritySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecuritySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
