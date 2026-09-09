export function generateEventsOutboxStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
