export function generateCommChannelsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
