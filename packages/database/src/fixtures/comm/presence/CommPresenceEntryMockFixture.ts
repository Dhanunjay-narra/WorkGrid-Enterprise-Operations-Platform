export function generateCommPresenceEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
