export function generateCommChannelsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
