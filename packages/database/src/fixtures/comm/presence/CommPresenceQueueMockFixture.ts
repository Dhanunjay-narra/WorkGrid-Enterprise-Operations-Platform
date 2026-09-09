export function generateCommPresenceQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
