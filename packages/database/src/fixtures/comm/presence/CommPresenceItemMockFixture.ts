export function generateCommPresenceItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
