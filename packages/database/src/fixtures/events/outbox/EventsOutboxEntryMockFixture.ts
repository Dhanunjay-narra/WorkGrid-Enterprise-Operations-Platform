export function generateEventsOutboxEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
