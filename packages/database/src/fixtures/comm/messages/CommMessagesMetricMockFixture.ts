export function generateCommMessagesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
