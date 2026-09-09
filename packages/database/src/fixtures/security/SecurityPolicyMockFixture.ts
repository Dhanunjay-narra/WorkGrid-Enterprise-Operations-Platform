export function generateSecurityPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
