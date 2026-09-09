export function generateEventsMetricsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
