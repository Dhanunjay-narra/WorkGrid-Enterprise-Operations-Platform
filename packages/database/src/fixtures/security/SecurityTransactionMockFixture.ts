export function generateSecurityTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
