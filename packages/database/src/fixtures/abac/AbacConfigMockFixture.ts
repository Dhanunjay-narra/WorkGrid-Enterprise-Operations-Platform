export function generateAbacConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
