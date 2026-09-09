export function generateEventsOutboxSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
