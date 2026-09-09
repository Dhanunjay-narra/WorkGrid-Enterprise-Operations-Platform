export function generateEventsMetricsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
