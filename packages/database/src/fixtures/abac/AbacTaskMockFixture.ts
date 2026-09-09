export function generateAbacTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
