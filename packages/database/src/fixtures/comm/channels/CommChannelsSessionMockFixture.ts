export function generateCommChannelsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
