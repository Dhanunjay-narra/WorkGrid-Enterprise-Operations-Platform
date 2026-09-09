export function generateCommPresenceThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
