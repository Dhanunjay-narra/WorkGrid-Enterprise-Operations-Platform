export function generateCommPresenceRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
