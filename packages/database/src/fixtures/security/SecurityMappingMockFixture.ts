export function generateSecurityMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
