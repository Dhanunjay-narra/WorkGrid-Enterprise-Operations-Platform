export function generateIntOauthItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
