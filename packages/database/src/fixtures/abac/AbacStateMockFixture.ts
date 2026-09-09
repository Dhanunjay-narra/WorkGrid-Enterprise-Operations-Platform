export function generateAbacStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
