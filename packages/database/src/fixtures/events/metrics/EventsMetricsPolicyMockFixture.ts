export function generateEventsMetricsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
