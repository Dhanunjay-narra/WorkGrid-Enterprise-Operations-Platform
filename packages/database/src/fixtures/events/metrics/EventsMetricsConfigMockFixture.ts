export function generateEventsMetricsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
