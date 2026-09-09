export function generateAbacPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
