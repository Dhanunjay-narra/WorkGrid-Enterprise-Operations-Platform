export function generateAbacRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
