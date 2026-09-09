export function generateAbacEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
