export function generateEventsSchemaPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
