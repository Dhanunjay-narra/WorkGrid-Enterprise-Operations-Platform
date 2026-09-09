export function generateAuthItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
