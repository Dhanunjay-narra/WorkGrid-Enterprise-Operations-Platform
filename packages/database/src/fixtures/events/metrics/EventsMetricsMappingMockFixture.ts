export function generateEventsMetricsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
