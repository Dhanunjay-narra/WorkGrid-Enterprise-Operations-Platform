export function generateEventsMetricsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
