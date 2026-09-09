export function generateEventsMetricsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
