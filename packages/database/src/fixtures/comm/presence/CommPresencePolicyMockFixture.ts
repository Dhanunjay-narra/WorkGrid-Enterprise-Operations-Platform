export function generateCommPresencePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresencePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
