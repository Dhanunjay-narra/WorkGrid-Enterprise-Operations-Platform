export function generateEventsMetricsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
