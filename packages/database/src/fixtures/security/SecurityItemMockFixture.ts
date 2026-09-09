export function generateSecurityItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
