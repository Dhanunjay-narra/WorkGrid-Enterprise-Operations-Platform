export function generateEventsMetricsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
