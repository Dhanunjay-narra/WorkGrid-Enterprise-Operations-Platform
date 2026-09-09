export function generateCommPresencePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresencePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
