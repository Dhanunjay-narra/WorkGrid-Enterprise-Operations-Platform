export function generateEventsConsumersMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
