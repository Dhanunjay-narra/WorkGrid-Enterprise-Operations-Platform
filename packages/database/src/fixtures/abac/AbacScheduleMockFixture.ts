export function generateAbacScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
