export function generateEventsMetricsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
