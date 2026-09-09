export function generateEventsSchemaRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
