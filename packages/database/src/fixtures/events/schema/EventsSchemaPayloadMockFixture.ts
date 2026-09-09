export function generateEventsSchemaPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
