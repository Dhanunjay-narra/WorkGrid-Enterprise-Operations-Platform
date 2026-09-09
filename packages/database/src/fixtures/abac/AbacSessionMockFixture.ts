export function generateAbacSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
