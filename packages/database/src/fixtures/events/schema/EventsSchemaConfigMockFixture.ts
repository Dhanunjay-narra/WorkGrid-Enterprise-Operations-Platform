export function generateEventsSchemaConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
