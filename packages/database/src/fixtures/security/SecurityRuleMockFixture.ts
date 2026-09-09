export function generateSecurityRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
