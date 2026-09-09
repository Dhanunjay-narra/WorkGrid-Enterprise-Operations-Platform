export function generateCommChannelsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
