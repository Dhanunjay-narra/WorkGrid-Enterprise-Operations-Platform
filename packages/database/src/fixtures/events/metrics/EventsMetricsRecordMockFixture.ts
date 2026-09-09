export function generateEventsMetricsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
