export function generateCommChannelsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
