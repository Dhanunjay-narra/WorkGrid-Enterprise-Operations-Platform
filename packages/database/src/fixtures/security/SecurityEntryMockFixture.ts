export function generateSecurityEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
