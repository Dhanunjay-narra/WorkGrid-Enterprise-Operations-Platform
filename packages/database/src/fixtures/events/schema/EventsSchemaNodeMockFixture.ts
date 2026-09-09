export function generateEventsSchemaNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
