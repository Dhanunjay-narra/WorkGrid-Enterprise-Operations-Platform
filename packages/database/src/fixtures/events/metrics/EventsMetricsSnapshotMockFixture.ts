export function generateEventsMetricsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
