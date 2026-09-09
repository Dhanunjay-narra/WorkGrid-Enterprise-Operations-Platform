export function generateEventsSchemaSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
