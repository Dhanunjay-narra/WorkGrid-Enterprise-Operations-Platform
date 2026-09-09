export function generateEventsSchemaStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
