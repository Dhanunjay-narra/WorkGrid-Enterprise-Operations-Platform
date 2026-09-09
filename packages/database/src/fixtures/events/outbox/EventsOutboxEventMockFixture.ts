export function generateEventsOutboxEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
