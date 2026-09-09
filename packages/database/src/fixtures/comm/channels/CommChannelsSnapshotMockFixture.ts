export function generateCommChannelsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
