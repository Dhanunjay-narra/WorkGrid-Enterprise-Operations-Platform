export function generateCommChannelsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
