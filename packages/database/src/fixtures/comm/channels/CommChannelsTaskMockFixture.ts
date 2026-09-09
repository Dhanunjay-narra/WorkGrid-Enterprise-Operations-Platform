export function generateCommChannelsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
