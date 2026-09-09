export function generateSupportQueuesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
