export function generateEventsMetricsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
