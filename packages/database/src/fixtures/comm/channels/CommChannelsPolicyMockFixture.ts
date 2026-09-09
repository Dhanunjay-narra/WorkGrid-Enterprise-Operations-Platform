export function generateCommChannelsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
