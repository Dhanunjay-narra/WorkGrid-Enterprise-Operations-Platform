export function generateAbacMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
