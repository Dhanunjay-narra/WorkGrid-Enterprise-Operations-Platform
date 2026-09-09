export function generateEventsMetricsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
