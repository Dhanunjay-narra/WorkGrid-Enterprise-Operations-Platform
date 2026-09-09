export function generateAbacEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
