export function generateCommPresenceTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
