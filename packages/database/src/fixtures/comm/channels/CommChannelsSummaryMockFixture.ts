export function generateCommChannelsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
