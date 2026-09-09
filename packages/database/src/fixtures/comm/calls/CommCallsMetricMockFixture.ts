export function generateCommCallsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
