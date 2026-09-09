export function generateEventsSchemaEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
