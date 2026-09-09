export function generateCommChannelsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
