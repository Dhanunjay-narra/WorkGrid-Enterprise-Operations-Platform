export function generateCommPresenceScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
