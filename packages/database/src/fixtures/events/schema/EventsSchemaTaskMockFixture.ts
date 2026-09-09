export function generateEventsSchemaTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
