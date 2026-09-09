export function generateSecurityStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
