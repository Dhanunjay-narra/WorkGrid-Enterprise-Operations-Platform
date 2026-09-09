export function generateAbacQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
