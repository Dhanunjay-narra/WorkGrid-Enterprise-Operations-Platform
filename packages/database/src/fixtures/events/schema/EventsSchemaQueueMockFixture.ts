export function generateEventsSchemaQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
