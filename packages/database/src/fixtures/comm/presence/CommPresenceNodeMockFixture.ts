export function generateCommPresenceNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
