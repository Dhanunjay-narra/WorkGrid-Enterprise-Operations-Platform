export function generateCommChannelsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
