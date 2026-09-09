export function generateEventsMetricsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
