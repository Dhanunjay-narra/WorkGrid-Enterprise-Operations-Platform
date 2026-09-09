export function generateEventsSchemaMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
