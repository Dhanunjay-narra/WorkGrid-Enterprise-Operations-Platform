export function generateCommPresenceEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
