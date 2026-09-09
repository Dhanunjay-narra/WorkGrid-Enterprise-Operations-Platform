export function generateCommThreadsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
