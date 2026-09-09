export function generateEventsMetricsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
