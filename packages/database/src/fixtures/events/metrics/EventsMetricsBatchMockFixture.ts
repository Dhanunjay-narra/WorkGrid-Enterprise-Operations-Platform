export function generateEventsMetricsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
