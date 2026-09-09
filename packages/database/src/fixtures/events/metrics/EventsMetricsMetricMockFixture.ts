export function generateEventsMetricsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
