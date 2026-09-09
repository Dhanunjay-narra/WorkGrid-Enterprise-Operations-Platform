export function generateEventsMetricsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
