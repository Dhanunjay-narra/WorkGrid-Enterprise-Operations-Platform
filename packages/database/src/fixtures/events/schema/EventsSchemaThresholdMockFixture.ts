export function generateEventsSchemaThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
