export function generateAbacNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
