export function generateCommChannelsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
