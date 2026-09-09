export function generateCommChannelsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
