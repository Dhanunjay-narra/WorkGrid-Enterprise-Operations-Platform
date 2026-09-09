export function generateCommChannelsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
