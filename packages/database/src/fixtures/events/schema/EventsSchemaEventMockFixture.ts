export function generateEventsSchemaEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
