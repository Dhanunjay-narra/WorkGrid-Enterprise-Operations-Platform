export function generateEventsMetricsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
