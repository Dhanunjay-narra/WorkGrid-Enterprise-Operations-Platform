export function generateEventsOutboxMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
