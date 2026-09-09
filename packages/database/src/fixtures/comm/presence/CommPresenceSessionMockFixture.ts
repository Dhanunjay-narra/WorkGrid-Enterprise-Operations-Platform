export function generateCommPresenceSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
