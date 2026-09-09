export function generateAbacProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
