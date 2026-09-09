export function generateCommChannelsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
