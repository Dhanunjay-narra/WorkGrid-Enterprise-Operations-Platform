export function generateEventsSchemaItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
