export function generateCommChannelsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
