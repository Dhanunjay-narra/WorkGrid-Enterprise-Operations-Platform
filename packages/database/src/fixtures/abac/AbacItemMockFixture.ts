export function generateAbacItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
