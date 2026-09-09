export function generateCommChannelsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
