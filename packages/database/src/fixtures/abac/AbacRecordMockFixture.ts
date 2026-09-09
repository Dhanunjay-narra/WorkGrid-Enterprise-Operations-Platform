export function generateAbacRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
