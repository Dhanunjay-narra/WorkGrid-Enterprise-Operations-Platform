export function generateEventsMetricsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
