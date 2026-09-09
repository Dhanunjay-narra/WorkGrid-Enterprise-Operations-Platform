export function generateCommPresenceConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
