export function generateCommPresenceStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
