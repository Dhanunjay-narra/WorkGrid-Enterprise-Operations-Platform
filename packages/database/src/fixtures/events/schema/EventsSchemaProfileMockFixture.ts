export function generateEventsSchemaProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
