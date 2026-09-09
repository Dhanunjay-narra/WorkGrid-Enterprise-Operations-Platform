export function generateEventsPartitionsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
