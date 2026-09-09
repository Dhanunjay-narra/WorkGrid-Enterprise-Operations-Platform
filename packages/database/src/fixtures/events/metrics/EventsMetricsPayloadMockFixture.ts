export function generateEventsMetricsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
