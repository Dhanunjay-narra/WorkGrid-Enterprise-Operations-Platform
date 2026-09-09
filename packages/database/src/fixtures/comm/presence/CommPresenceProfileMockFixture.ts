export function generateCommPresenceProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
