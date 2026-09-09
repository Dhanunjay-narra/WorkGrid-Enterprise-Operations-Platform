export function generateEventsSchemaMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
