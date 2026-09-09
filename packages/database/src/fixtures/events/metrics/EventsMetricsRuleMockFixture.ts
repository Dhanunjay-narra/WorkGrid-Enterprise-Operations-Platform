export function generateEventsMetricsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
