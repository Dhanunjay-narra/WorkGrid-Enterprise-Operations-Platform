export function generateSecurityProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
