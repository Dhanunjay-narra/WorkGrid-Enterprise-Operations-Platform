export function generateEventsOutboxMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
