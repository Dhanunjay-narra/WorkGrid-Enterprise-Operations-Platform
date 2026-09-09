export function generateEventsDeadletterMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
