export function generateCommChannelsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
