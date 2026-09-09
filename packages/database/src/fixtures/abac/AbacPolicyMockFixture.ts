export function generateAbacPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
